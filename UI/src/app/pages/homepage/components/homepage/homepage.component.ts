import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBet, ISelectedBet } from './homepage.models';
import { BetsSocket } from '../../../../shared/bets.socket';
import { tap } from 'rxjs/operators';
import { BetsService } from '../../../../shared/bets.service';
import { SubscribeManager } from '../../../../shared/subscriber.helper';
import { Select, Store } from '@ngxs/store';
import { AddBet } from '../../../../store/checkout.actions';
import { CheckoutState } from '../../../../store/checkout.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  @Select(CheckoutState.getCheckoutBets) checkoutBets$: Observable<Array<ISelectedBet>>;
  checkoutItems: Array<ISelectedBet>;
  realTimeBets: Array<IBet> = [];
  bets: Array<IBet> = [];
  private sm = new SubscribeManager();

  constructor(private betsSocket: BetsSocket,
              private betsService: BetsService,
              private store: Store) { }

  ngOnInit(): void {
    this.fillGrids();
  }

  uniqueById<T>(arr: Array<T>): Array<T> {
    if (!Array.isArray(arr)) {
      return [];
    }
    return arr
      .map(e => e['id'])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]).map(e => arr[e]);
  }

  updateOrPushBet(bets: Array<IBet>): void {
    bets.forEach(bet => {
      const foundId = this.realTimeBets.map(i => i.id).indexOf(bet.id);
      if (foundId > -1) {
        this.realTimeBets[foundId] = bet;
      } else {
        this.realTimeBets.push(bet);
      }
    });
  }

  selectedColumn($event: ISelectedBet): void {
    this.store.dispatch(new AddBet($event));
  }

  private fillGrids(): void {
    this.sm.add(
      this.betsSocket.connect().pipe(tap(betsArray => {
        const unifiedBetsArray = this.uniqueById<IBet>(betsArray);
        if (!this.bets.length) {
          this.bets = unifiedBetsArray;
        } else {
          this.updateOrPushBet(unifiedBetsArray);
        }
      })).subscribe(),
      this.betsService.getBets().subscribe(bets => this.bets = bets),
      this.checkoutBets$.subscribe(res => this.checkoutItems = res)
    );
  }

  ngOnDestroy(): void {
    this.sm.unsubscribe();
  }
}

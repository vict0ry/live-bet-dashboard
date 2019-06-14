import { Component, Input, OnInit } from '@angular/core';
import { ISelectedBet } from '../homepage/homepage.models';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {

  @Input() checkoutItems: Array<ISelectedBet>;

  constructor() { }

  ngOnInit() {
  }

  getTotal(): string {
    return this.checkoutItems.map(i => {
      const stake = +i['stake'];
      if (Number.isInteger(stake)) {
        return (i.coefficient * stake);
      }
      return 0;
    }).reduce((a, b) => {
      return a + b;
    }, 0).toFixed(2);
  }
}

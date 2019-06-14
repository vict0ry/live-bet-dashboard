import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBet, ISelectedBet } from '../homepage/homepage.models';

@Component({
  selector: 'app-betgrid',
  templateUrl: './betgrid.component.html',
  styleUrls: ['./betgrid.component.scss']
})
export class BetgridComponent implements OnInit {

  @Output() selectedColumn = new EventEmitter<ISelectedBet>();
  @Input() height: string;
  @Input() bets: Array<IBet> = [];

  constructor() { }

  ngOnInit(): void {
  }

  shortNumber(val: number): number {
    return +val.toFixed(3);
  }

  columnSelected(bet: IBet, coefficient: number): void {
    const selectedBet = {
      title: `${bet.teams[0].name} VS ${bet.teams[1].name}`,
      id: bet.id,
      coefficient
    };
    this.selectedColumn.emit(selectedBet);
  }
}

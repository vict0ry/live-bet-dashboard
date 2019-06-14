import { ISelectedBet } from '../pages/homepage/components/homepage/homepage.models';

export class AddBet {
  static readonly type = '[Checkout] Add Bet';

  constructor(public payload: ISelectedBet) {}
}

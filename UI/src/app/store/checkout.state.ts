import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddBet } from './checkout.actions';
import { ISelectedBet } from '../pages/homepage/components/homepage/homepage.models';

export class CheckoutStateModel {
  bets: Array<ISelectedBet>;
}

const defaultState: CheckoutStateModel = {
  bets: []
};

@State<CheckoutStateModel>({
  name: 'checkoutBets',
  defaults: defaultState
})
export class CheckoutState {
  constructor() {}

  @Selector()
  static getCheckoutBets(state: CheckoutStateModel): Array<ISelectedBet> {
    return state.bets;
  }

  @Action(AddBet)
  addBet({patchState, getState}: StateContext<CheckoutStateModel>, {payload}: AddBet) {
    return patchState({
      bets: [...getState().bets, payload]
    });
  }

}

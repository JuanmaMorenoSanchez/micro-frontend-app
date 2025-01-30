import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetLoginStatus } from '../actions/login.actions';

export interface LoginStateModel {
  loggedIn: boolean;
}

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    loggedIn: false
  }
})
export class LoginState {
  @Selector()
  static getLoggedIn(state: LoginStateModel): boolean {
    return state.loggedIn;
  }
  
  @Action(SetLoginStatus)
  setLoginStatus(ctx: StateContext<LoginStateModel>, action: SetLoginStatus) {
    const state = ctx.getState();
    ctx.setState({ ...state, loggedIn: action.status });
  }
}
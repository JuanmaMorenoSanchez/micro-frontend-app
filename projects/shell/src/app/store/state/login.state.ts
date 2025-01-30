import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetLoginStatus } from '../actions/login.actions';

export interface LoginStateModel {
  loggedIn: boolean;
  email?: string;
}

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    loggedIn: false,
    email: undefined
  }
})

export class LoginState {
  @Selector()
  static getLoggedIn(state: LoginStateModel): boolean {
    return state.loggedIn;
  }

  @Selector()
  static getUserEmail(state: LoginStateModel): string | undefined {
    return state.email;
  }
  
  @Action(SetLoginStatus)
  setLoginStatus(ctx: StateContext<LoginStateModel>, action: SetLoginStatus) {
    const state = ctx.getState();
    ctx.setState({ ...state, loggedIn: action.status, email: action.email });
  }
}
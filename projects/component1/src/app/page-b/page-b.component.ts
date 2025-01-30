import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { LoginState } from '../../../../shell/src/app/store/state/login.state';

@Component({
  selector: 'app-component1-page-b',
  imports: [],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.scss'
})
export class PageBComponent {
  public isLogged: Signal<boolean | undefined>;
  public userEmail: Signal<string | undefined>;

  constructor(private store: Store) {
    this.isLogged = toSignal(this.store.select(LoginState.getLoggedIn));
    this.userEmail = toSignal(this.store.select(LoginState.getUserEmail));
  }
}

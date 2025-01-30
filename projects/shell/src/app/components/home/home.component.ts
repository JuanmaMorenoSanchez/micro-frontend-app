import { Component, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngxs/store';
import { LoginState } from '../../store/state/login.state';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-shell-home',
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public isLogged: Signal<boolean | undefined>;
  public userEmail: Signal<string | undefined>;

  constructor(private store: Store) {
    this.isLogged = toSignal(this.store.select(LoginState.getLoggedIn));
    this.userEmail = toSignal(this.store.select(LoginState.getUserEmail));
  }
}


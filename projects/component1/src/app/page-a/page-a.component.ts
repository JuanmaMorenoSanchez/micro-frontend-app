import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { LoginState } from '../../../../shell/src/app/store/state/login.state';

@Component({
  selector: 'app-component1-page-a',
  imports: [],
  templateUrl: './page-a.component.html',
  styleUrl: './page-a.component.scss'
})
export class PageAComponent {
  public isLogged: Signal<boolean | undefined>;

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {
    this.isLogged = toSignal(this.store.select(LoginState.getLoggedIn))
  }
}

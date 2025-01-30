import { Component, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoginState } from './store/state/login.state';
import { Store } from '@ngxs/store';
import { SetLoginStatus } from './store/actions/login.actions';

@Component({
  selector: 'app-shell-root',
  imports: [ RouterOutlet, MatToolbarModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isLogged: Signal<boolean | undefined>;

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {
    this.isLogged = toSignal(this.store.select(LoginState.getLoggedIn))
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //
      }
    });
  }

  signOut(): void {
    this.store.dispatch(new SetLoginStatus(false));
  }
}

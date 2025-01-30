import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoginState } from './../store/state/login.state';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private store: Store, 
        private router: Router
    ) {}

    canActivate(): boolean {
        const isLogged = this.store.selectSnapshot(LoginState.getLoggedIn);

        if (!isLogged) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}

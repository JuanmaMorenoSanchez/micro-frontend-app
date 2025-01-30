import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetLoginStatus } from '../store/actions/login.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private store: Store) {}

  login(email: string) {
    // Simulate login logic here
    return new Observable(observer => {
      setTimeout(() => {
        this.store.dispatch(new SetLoginStatus(true, email));  // Update login status
        observer.next();
        observer.complete();
      }, 1000);
    });
  }
}

import { Component, Signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login-dialog',
  imports: [ MatInputModule, MatButtonModule, MatDialogModule, MatFormFieldModule, ReactiveFormsModule ],
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  public loginForm: FormGroup;
  public isValid: Signal<boolean>;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.isValid = toSignal(this.loginForm.statusChanges.pipe(
      map(status => status === 'VALID')
    ), { initialValue: this.loginForm.valid });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.email).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}

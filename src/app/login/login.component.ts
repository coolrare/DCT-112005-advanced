import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ForbiddenNameDirective } from '../forbidden-name.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ForbiddenNameDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild(NgForm) form?: NgForm;
  @ViewChild('tEmail') tEmail?: NgModel;

  router = inject(Router);

  ngAfterViewInit(): void {
    this.tEmail?.valueChanges?.subscribe((value) => {
      console.log(value);
    });
  }

  login(loginUser: any) {
    // TODO: 送出 API
    console.log(loginUser);
    console.log(this.form?.value);
    localStorage.setItem('token', 'xxxx');
    // this.router.navigateByUrl('/');
  }

  loginSubmit(event: any, loginUser: any) {
    if (this.form?.invalid) {
      return;
    }
    console.log(event);
    console.log(loginUser);

    setTimeout(() => {
      this.form?.resetForm();
    }, 3000);
  }
}

import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(NgForm) form?: NgForm;
  router = inject(Router);

  login(loginUser: any) {
    // TODO: 送出 API
    console.log(loginUser);
    console.log(this.form?.value);
    localStorage.setItem('token', 'xxxx');
    // this.router.navigateByUrl('/');
  }

  loginSubmit(event: any, loginUser: any) {
    if(this.form?.invalid) {
      return
    }
    console.log(event);
    console.log(loginUser);
  }
}

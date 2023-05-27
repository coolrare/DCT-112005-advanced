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

  login() {
    localStorage.setItem('token', 'xxxx');
    this.router.navigateByUrl('/');
  }
}

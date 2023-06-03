import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike'),
    lastName: this.formBuilder.control('Huang'),
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
    confirmPassword: this.formBuilder.control(''),
  });

  register() {
    console.log(this.form.value);
    console.log('firstName (form.get)', this.form.get('firstName')?.value);
    console.log('firstName (form.controls)', this.form.controls.firstName.value);
  }
}

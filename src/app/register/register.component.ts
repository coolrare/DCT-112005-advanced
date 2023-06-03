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
  formSubmitted = false;
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike'),
    lastName: this.formBuilder.control('Huang'),
    email: this.formBuilder.control(''),
    password: this.formBuilder.group({
      password: this.formBuilder.control(''),
      confirmPassword: this.formBuilder.control(''),
    }),
    skills: this.formBuilder.array([
      this.formBuilder.control('HTML'),
      this.formBuilder.control('CSS'),
      this.formBuilder.control('JavaScript'),
      this.formBuilder.control('Angular'),
    ])
  });

  register() {
    this.form.controls.skills.controls


    let fieldName = 'firstName';
    this.formSubmitted = true;
    console.log(this.form.value);
    console.log('firstName (form.get)', this.form.get(fieldName)?.value);
    console.log('firstName (form.controls)', this.form.controls.firstName.value);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { forbiddenNameValidator, forbiddenNameValidator2, confirmPasswordValidator, passwordValidator } from '../custom-validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formSubmitted = false;
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike', [Validators.required, forbiddenNameValidator]),
    lastName: this.formBuilder.control('Huang', [Validators.required, forbiddenNameValidator2(/Mike/)]),
    email: this.formBuilder.control('', Validators.email),
    password: this.formBuilder.group({
      password: this.formBuilder.control('', passwordValidator),
      confirmPassword: this.formBuilder.control('', passwordValidator),
    }, { validators: confirmPasswordValidator }),
    skills: this.formBuilder.array([
      this.formBuilder.control('HTML'),
      this.formBuilder.control('CSS'),
      this.formBuilder.control('JavaScript'),
      this.formBuilder.control('Angular'),
    ]),
  });

  form2 = new FormGroup({
    firstName: new FormControl('Mike'),
    password: new FormGroup({
      password: new FormControl(''),
    }),
    skills: new FormArray([new FormControl('HTML'), new FormControl('CSS')]),
  });

  register() {
    this.form.controls.skills.controls;

    let fieldName = 'firstName';
    this.formSubmitted = true;
    console.log(this.form.value);
    console.log('firstName (form.get)', this.form.get(fieldName)?.value);
    console.log(
      'firstName (form.controls)',
      this.form.controls.firstName.value
    );
  }
}

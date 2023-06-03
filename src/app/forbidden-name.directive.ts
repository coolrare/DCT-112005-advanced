import { Directive, Input } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  FormControl,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { forbiddenNameValidator2 } from './custom-validators';

@Directive({
  standalone: true,
  selector: '[forbiddenName][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true,
    },
  ],
})
export class ForbiddenNameDirective implements Validator {
  @Input() forbiddenName?: string;

  /**
   *
   */
  constructor() {
    console.log('create forbiddenName');
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!this.forbiddenName) {
      return null;
    }
    return forbiddenNameValidator2(new RegExp(this.forbiddenName))(control);
  }
}

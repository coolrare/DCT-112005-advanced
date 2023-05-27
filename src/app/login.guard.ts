import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const loginGuard: CanDeactivateFn<LoginComponent> = (component, currentRoute, currentState, nextState) => {

  console.log(component.form?.dirty);
  if(component.form?.dirty) {
    return false;
  }

  return true;
};

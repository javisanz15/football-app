import { FormGroup } from '@angular/forms';

export function validateLength(group: FormGroup) : {[key: string]: any} | null {
  const value = group.value;
  const gks = value.goalkeeper.length;
  const def = value.defence.length;
  const med = value.midfield.length;
  const str = value.attack.length;
  const result = gks+def+med+str;
  if (result < 11) {
    return { 'lengthInvalid': true }; // return object if the validation is not passed.
  }
  return null; // return null if validation is passed.
}
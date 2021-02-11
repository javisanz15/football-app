import { FormGroup } from '@angular/forms';

export class FootballWizValidators {

  static validateLength(group: FormGroup): { [key: string]: any } | null {
    const value = group.value;
    const gks = value.goalkeeper.length;
    const def = value.defence.length;
    const med = value.midfield.length;
    const str = value.attack.length;
    const result = gks + def + med + str;
    if (result < 11) {
      return { 'lengthInvalidError': true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }

  static validateFullPositions(group: FormGroup): { [key: string]: any } | null {
    const value = group.value;
    const gks = value.goalkeeper.length;
    const def = value.defence.length;
    const med = value.midfield.length;
    const str = value.attack.length;
    if (gks === 0 || def === 0 || med === 0 || str === 0) {
      return { 'emptyPositionError': true };
    }
    return null;
  }

  static validateDefence(group: FormGroup): { [key: string]: any } | null {
    const value = group.value;
    const def = value.defence.length;
    if(def < 3) {
      return { 'defenceError': true };
    }
    return null;
  }

  static validateMidfield(group: FormGroup): { [key: string]: any } | null {
    const value = group.value;
    const med = value.midfield.length;
    if(med < 3) {
      return { 'midfieldError': true };
    }
    return null;
  }

  static validateAttack(group: FormGroup): { [key: string]: any } | null {
    const value = group.value;
    const str = value.attack.length;
    if(str < 2) {
      return { 'attackError': true };
    }
    return null;
  }

}

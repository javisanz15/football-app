import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

constructor() { }

getHour(date: Date): string{
  return `${moment(date).format('HH:mm')} h`;
}

}

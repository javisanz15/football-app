import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

constructor() { 
  moment.locale('es');
}

getWrittenDateAndMonth(date: Date): string {
  return `${moment(date).format('D')} ${moment(date).format('MMM')}`
}

getHour(date: Date): string{
  return `${moment(date).format('HH:mm')} h`;
}

}

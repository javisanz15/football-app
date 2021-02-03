import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CalendarItem } from 'src/app/models/calendar.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(
  private httpClient: HttpClient
) { }

getShortlistOfGames(): Observable<CalendarItem[]> {
  return this.httpClient.get<any[]>('https://api.laligafantasymarca.com/api/v3/calendar').pipe(
    map(res => res.map(item => {
      return {
        ...item,
        date: new Date(item.date),
        matchDate: new Date(item.matchDate),
        time: new Date(item.time)
      }
    })),
  );
}

}

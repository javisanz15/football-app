import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LineupItem, PlayerItem, PlayerLineup } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class LineupService {

public availableLineups: LineupItem[] = [
  {
    label: '5-4-1',
    goalkeepers: 1,
    defenders: 5,
    midfielders: 4,
    strikers: 1
  },
  {
    label: '5-3-2',
    goalkeepers: 1,
    defenders: 5,
    midfielders: 3,
    strikers: 2
  },
  {
    label: '4-5-1',
    goalkeepers: 1,
    defenders: 4,
    midfielders: 5,
    strikers: 1
  },
  {
    label: '4-4-2',
    goalkeepers: 1,
    defenders: 4,
    midfielders: 4,
    strikers: 2
  },
  {
    label: '4-3-3',
    goalkeepers: 1,
    defenders: 4,
    midfielders: 3,
    strikers: 3
  },
  {
    label: '3-5-2',
    goalkeepers: 1,
    defenders: 3,
    midfielders: 5,
    strikers: 2
  },
  {
    label: '3-4-3',
    goalkeepers: 1,
    defenders: 3,
    midfielders: 4,
    strikers: 3
  },
]
constructor(
  public httpClient: HttpClient,
) { }

public getPlayerListByPosition(): Observable<PlayerLineup> {
  return this.httpClient.get<PlayerItem[]>('https://api.laligafantasymarca.com/api/v3/players').pipe(
    map(result => {
      return {
        goalkeepers: result.filter(item => item.positionId === '1'),
        defenders: result.filter(item => item.positionId === '2'),
        midfielders: result.filter(item => item.positionId === '3'),
        strikers: result.filter(item => item.positionId === '4'),
      }
    })
  );
}

public getAvailableFormations(): Observable<LineupItem[]> {
  return of(this.availableLineups);
}

// public getSinglePlayer(): Observable<PlayerItem> {

// }

// public getPlayersByTeam(teamId: string): Observable<PlayerItem[]> {

// }

}

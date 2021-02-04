import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PlayerItem, PlayerLineup } from 'src/app/models/player.model';
import { LineupService } from '../../services/lineup.service';

@Component({
  selector: 'app-lineup-selection',
  templateUrl: './lineup-selection.component.html',
  styleUrls: ['./lineup-selection.component.scss']
})
export class LineupSelectionComponent implements OnInit {

  @Input() lineupForm!: FormGroup;
  public playerList$: Observable<PlayerLineup>;
  constructor(
    public lineupService: LineupService,
  ) { 
    this.playerList$ = this.lineupService.getPlayerListByPosition();
  }

  ngOnInit() {
    this.addPlayer('goalkeeper');
    this.addPlayer('defence');
    this.addPlayer('midfield');
    this.addPlayer('attack')
  }

  public addPlayer(position: string) {
    const array = this.lineupForm.get(position) as FormArray;
    array.push(this.getEmptyItem());
  }

  public deletePlayer(position: string, index: number) {
    const array = this.lineupForm.get(position) as FormArray;
    array.removeAt(index);
  }

  public getEmptyItem(): FormControl {
    return new FormControl();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { PlayerItem, PlayerLineup } from 'src/app/models/player.model';
import { LineupService } from '../../services/lineup.service';
import {MatDialog} from '@angular/material/dialog';
import { PlayerSelectDialogComponent } from '../player-select-dialog/player-select-dialog.component';

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
    public translateService: TranslateService,
    public dialog: MatDialog,
  ) { 
    this.playerList$ = this.lineupService.getPlayerListByPosition();
  }

  ngOnInit() {
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

  public openPlayerSelectionDialog(list: PlayerItem[]) {
    this.dialog.open(PlayerSelectDialogComponent, {
      width: '600px',
      height: '600px',
      data: {
        playerList: list
      }
    });
  }

}

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

  public addPlayer(position: string, player: PlayerItem) {
    const array = this.lineupForm.get(position) as FormArray;
    array.push(new FormControl(player));
  }

  public deletePlayer(position: string, index: number) {
    const array = this.lineupForm.get(position) as FormArray;
    array.removeAt(index);
  }

  public getEmptyItem(): FormControl {
    return new FormControl();
  }

  public openPlayerSelectionDialog(list: PlayerItem[], position: string) {
    const array = (this.lineupForm.get(position) as FormArray).value;
    const filteredList = list.filter(item => !array.find(element => element.id === item.id));
    const dialogRef =this.dialog.open(PlayerSelectDialogComponent, {
      width: '600px',
      height: '600px',
      data: {
        playerList: filteredList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.addPlayer(position, result);
      }
    });
  }

  public getPlayerToDisplay(position: string, index: number): PlayerItem {
    const array = this.lineupForm.get(position) as FormArray;
   return (this.lineupForm.get(position) as FormArray).controls[index].value;
  }

  public isFullList(position: string): boolean {
    const array = this.lineupForm.get(position) as FormArray;
    return array.value.length > 0;
  }

  public deleteAllSelections(position: string) {
    const array = this.lineupForm.get(position) as FormArray;
    array.clear();
  }

}

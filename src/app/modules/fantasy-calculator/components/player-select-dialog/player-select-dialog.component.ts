import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerItem } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-select-dialog',
  templateUrl: './player-select-dialog.component.html',
  styleUrls: ['./player-select-dialog.component.scss']
})
export class PlayerSelectDialogComponent implements OnInit {

  public list: PlayerItem[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.list = this.data.playerList.sort(function(a, b){return b.points-a.points});
  }

  ngOnInit() {
    console.log(this.list);
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerItem } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-select-dialog',
  templateUrl: './player-select-dialog.component.html',
  styleUrls: ['./player-select-dialog.component.scss']
})
export class PlayerSelectDialogComponent implements OnInit {

  public list: PlayerItem[];
  public copyList: PlayerItem[];
  public form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PlayerSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
  ) {
    this.list = this.data.playerList.sort(function (a, b) { return b.points - a.points });
    this.copyList = this.list;
    this.form = this.fb.group({
      playerToSearch: [null]
    })
  }

  ngOnInit() {
  }

  public filterPlayerList() {
    const filter = this.form.get('playerToSearch').value;
    this.copyList = this.list.filter(item => item.nickname.toLocaleLowerCase().includes(filter));
  }

  public closeDialog(player: PlayerItem) {
    this.dialogRef.close(player);
  }

}

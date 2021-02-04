import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LineupItem, PlayerItem } from 'src/app/models/player.model';
import { LineupService } from '../../services/lineup.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  public form: FormGroup;
  public lineups$: Observable<LineupItem[]>;
  constructor(
    private fb: FormBuilder,
    public translate: TranslateService,
    public lineupService: LineupService,
  ) { 
    this.lineups$ = this.lineupService.getAvailableFormations();
    this.form = this.fb.group({
      lineup: this.fb.group({
        goalkeeper: this.fb.array([]),
        defence: this.fb.array([]),
        midfield: this.fb.array([]),
        attack: this.fb.array([]),
      }),
      formation: ['best']
    })
  }

  ngOnInit() {
  }

  public getLineupForm(): FormGroup {
    return (this.form.get('lineup') as FormGroup);
  }

  public calculateBestLineup() {
    console.log('calculate');
  }

}

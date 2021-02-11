import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LineupItem, PlayerItem } from 'src/app/models/player.model';
import { LineupService } from '../../services/lineup.service';
import { FootballWizValidators } from '../../validators/football-wiz.validators';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  public form: FormGroup;
  public lineups$: Observable<LineupItem[]>;
  public bestLineup: LineupItem = {
    label: '',
    goalkeepers: null,
    defenders: null,
    midfielders: null,
    strikers: null,
  }
  constructor(
    private fb: FormBuilder,
    public translate: TranslateService,
    public lineupService: LineupService,
    public router: Router,
  ) { 
    this.lineups$ = this.lineupService.getAvailableFormations();
    this.form = this.fb.group({
      lineup: this.fb.group({
        goalkeeper: this.fb.array([]),
        defence: this.fb.array([]),
        midfield: this.fb.array([]),
        attack: this.fb.array([]),
      }, {
        validators: [
          FootballWizValidators.validateLength,
          FootballWizValidators.validateFullPositions,
          FootballWizValidators.validateDefence,
          FootballWizValidators.validateMidfield,
          FootballWizValidators.validateAttack
        ]
      }),
      formation: [this.bestLineup, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  public getLineupForm(): FormGroup {
    return (this.form.get('lineup') as FormGroup);
  }

  public calculateBestLineup() {
    const result = this.lineupService.calculateBestLineup(this.form.get('lineup') as FormGroup, this.form.get('formation').value);
    this.router.navigate(['fantasy-calculator', 'bestLineup'], {state: {bestLineup: result}});
  }

}

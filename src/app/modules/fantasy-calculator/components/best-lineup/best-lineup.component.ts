import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineupItem, PlayerItem, PlayerLineup } from 'src/app/models/player.model';

@Component({
  selector: 'app-best-lineup',
  templateUrl: './best-lineup.component.html',
  styleUrls: ['./best-lineup.component.scss']
})
export class BestLineupComponent implements OnInit {

  public bestLineup: PlayerLineup;
  constructor(
    public router: Router,
  ) {
    this.bestLineup = this.router.getCurrentNavigation().extras.state ? this.router.getCurrentNavigation().extras.state.bestLineup : null;
  }

  ngOnInit() {
    
  }

}

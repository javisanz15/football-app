import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleList } from '../models/common.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  moduleList: ModuleList[] = [
    {
      moduleLabel: 'FantasyWiz',
      moduleRoute: 'fantasy-calculator',
      active: true,
    },
    {
      moduleLabel: 'Equipos',
      moduleRoute: 'teams',
      active: false,
    },
    {
      moduleLabel: 'Jugadores',
      moduleRoute: 'players',
      active: false,
    },
    {
      moduleLabel: 'Partidos',
      moduleRoute: 'matches',
      active: false,
    },
    {
      moduleLabel: 'Mercado',
      moduleRoute: 'players',
      active: false,
    },
    {
      moduleLabel: 'Bajas',
      moduleRoute: 'players',
      active: false,
    }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  };

}

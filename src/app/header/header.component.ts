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
    },
    {
      moduleLabel: 'Equipos',
      moduleRoute: 'teams',
    },
    {
      moduleLabel: 'Jugadores',
      moduleRoute: 'players',
    },
    {
      moduleLabel: 'Mercado',
      moduleRoute: 'players',
    },
    {
      moduleLabel: 'Bajas',
      moduleRoute: 'players',
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

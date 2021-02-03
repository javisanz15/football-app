import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ModuleList } from '../models/common.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLanguage: string = 'es';
  moduleList: ModuleList[] = [
    {
      moduleLabel: 'menu.fantasyWiz',
      moduleRoute: 'fantasy-calculator',
      active: true,
    },
    {
      moduleLabel: 'menu.teams',
      moduleRoute: 'teams',
      active: false,
    },
    {
      moduleLabel: 'menu.players',
      moduleRoute: 'players',
      active: false,
    },
    {
      moduleLabel: 'menu.matches',
      moduleRoute: 'matches',
      active: false,
    },
    {
      moduleLabel: 'menu.players',
      moduleRoute: 'players',
      active: false,
    },
    {
      moduleLabel: 'menu.injuries',
      moduleRoute: 'injuries',
      active: false,
    }
  ];

  constructor(
    private router: Router,
    public translate: TranslateService,
  ) { }

  ngOnInit() {
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  };

  selectLanguage(newValue: string) {
    this.selectedLanguage = newValue;
    this.translate.use(newValue);
  }

}

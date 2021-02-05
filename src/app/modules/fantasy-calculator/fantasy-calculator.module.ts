import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './components/init/init.component';
import { FantasyCalculatorRoutingModule } from './fantasy-calculator-routing.module';
import { LineupSelectionComponent } from './components/lineup-selection/lineup-selection.component';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { PlayerSelectDialogComponent } from './components/player-select-dialog/player-select-dialog.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { PlayerCardComponent } from './components/player-card/player-card.component';

@NgModule({
  imports: [
    CommonModule,
    FantasyCalculatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
  ],
  declarations: [
    InitComponent,
    LineupSelectionComponent,
    PlayerSelectDialogComponent,
    PlayerCardComponent,
  ],
})
export class FantasyCalculatorModule { }

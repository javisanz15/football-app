import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './components/init/init.component';
import { FantasyCalculatorRoutingModule } from './fantasy-calculator-routing.module';
import { LineupSelectionComponent } from './components/lineup-selection/lineup-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  declarations: [
    InitComponent,
    LineupSelectionComponent
  ]
})
export class FantasyCalculatorModule { }

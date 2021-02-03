import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './components/init/init.component';
import { FantasyCalculatorRoutingModule } from './fantasy-calculator-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FantasyCalculatorRoutingModule,
  ],
  declarations: [InitComponent]
})
export class FantasyCalculatorModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestLineupComponent } from './components/best-lineup/best-lineup.component';
import { InitComponent } from './components/init/init.component';

const routes: Routes = [
  { path: 'init', component: InitComponent},
  { path: 'bestLineup', component: BestLineupComponent},
  { path: '', redirectTo: 'init', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FantasyCalculatorRoutingModule { }

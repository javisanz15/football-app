import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCarouselModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }

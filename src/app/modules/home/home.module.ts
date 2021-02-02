import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCarouselModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

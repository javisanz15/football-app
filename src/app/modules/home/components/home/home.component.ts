import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngbmodule/material-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: Array<string> = ['Hoja1', 'Hoja2', 'Hoja3'];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngbmodule/material-carousel';
import { Observable } from 'rxjs';
import { HomeService } from '../../services/home.service';
import { tap } from 'rxjs/operators';
import { CalendarItem, CalendarTeamItem } from 'src/app/models/calendar.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  calendarObservable$: Observable<CalendarItem[]>;
  slides: Array<CalendarItem[]> = [];
  constructor(
    private homeService: HomeService,
  ) { 
    this.calendarObservable$ = this.homeService.getShortlistOfGames().pipe(
      tap(result => this.slides = this.chunkArray(result, 2)),
      tap(v => console.log(this.slides))
    );
  }
  
  ngOnInit() {
  }

  chunkArray(myArray: any[], chunk_size: number): Array<any[]>{
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        const myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
  }

}

import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngbmodule/material-carousel';
import { Observable } from 'rxjs';
import { HomeService } from '../../services/home.service';
import { tap } from 'rxjs/operators';
import { CalendarItem } from 'src/app/models/calendar.model';
import { DateService } from 'src/app/utils/date/date.service';
import { Router } from '@angular/router';

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
    public dateService: DateService,
    private router: Router,
  ) { 
    this.calendarObservable$ = this.homeService.getShortlistOfGames().pipe(
      tap(result => this.slides = this.chunkArray(result, 2)),
    );
  }
  
  ngOnInit() {
  }

  goToMatchDetail(id: string) {
    this.router.navigate(['matches', id]);
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

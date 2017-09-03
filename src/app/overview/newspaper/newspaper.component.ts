import {Component, Input, OnInit} from '@angular/core';

import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

import {OverviewBroadcastService} from '../overview-broadcast.service';
import {New} from './domain/new';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.styl']
})
export class NewspaperComponent implements OnInit {

  @Input('country') country: Object;

  news: New[] = [];
  popularNew: New = null;
  secondaryNews: New[] = [];

  sliderConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    paginationClickable: true,
    pagination: '.bottom-news__controls .swiper-pagination',
    nextButton: '.bottom-news__controls .swiper-button-next',
    prevButton: '.bottom-news__controls .swiper-button-prev',
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  };

  constructor(private overviewBroadcastService: OverviewBroadcastService) {}

  ngOnInit() {
    this.overviewBroadcastService.currentOverview.subscribe(overview => overview.articles && this.bindTrends(JSON.parse(overview.articles)));
  }

  bindTrends(data: any) {

    const trends = data && data.length ? data : [];

    this.news = trends.map(trend => new New(trend));
    this.popularNew = this.news.shift();
    this.secondaryNews = this.news.splice(0, 4);
  }
}

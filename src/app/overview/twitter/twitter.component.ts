import {Component, OnInit} from '@angular/core';

import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

import {OverviewBroadcastService} from '../overview-broadcast.service';
import {Tweet} from './domain/tweet';
import {User} from './domain/user';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.styl']
})
export class TwitterComponent implements OnInit {

  tweets: Tweet = null;
  popularUser: User;

  sliderConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    paginationClickable: true,
    pagination: '.tweets__controls .swiper-pagination',
    nextButton: '.tweets__controls .swiper-button-next',
    prevButton: '.tweets__controls .swiper-button-prev',
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  };

  constructor(private overviewBroadcastService: OverviewBroadcastService) {}

  ngOnInit() {
    this.overviewBroadcastService.currentOverview.subscribe(overview => overview.tweets && this.bindTrends(JSON.parse(overview.tweets)));
  }

  bindTrends(data: string) {

    const trends = (data && data.length ? data[0] : data) || {};

    this.tweets = new Tweet(trends);
    this.popularUser = this.tweets.popularTrend.users.shift();
  }
}

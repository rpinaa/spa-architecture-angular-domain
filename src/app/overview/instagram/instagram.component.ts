import {Component, OnInit} from '@angular/core';

import {OverviewBroadcastService} from '../overview-broadcast.service';
import {PostTrend} from './domain/post-trend';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.styl']
})
export class InstagramComponent implements OnInit {

  postTrend: PostTrend = null;

  constructor(private overviewBroadcastService: OverviewBroadcastService) {}

  ngOnInit() {
    this.overviewBroadcastService.currentOverview.subscribe(overview => overview.posts && this.bindTrends(JSON.parse(overview.posts)));
  }

  bindTrends(data: string) {
    const trends = data && data.length ? data : [];

    this.postTrend = new PostTrend(trends);

    this.postTrend.posts.pop();
  }
}

import { Component, OnInit } from '@angular/core';

import {OverviewBroadcastService} from '../overview-broadcast.service';
import {SearchTrend} from './domain/search-trend';
import {Search} from "./domain/search";

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.styl']
})
export class SearchesComponent implements OnInit {

  currentDate = Date.now();
  leftSearches: Search[] = [];
  rightSearches: Search[] = [];
  searchTrend: SearchTrend = null;

  constructor(private overviewBroadcastService: OverviewBroadcastService) {}

  ngOnInit() {
    this.overviewBroadcastService.currentOverview.subscribe(overview => overview.searches && this.bindTrends(JSON.parse(overview.searches)));
  }

  bindTrends(data: string) {
    const trends = data && data.length ? data : [];

    this.searchTrend = new SearchTrend(trends);
    this.leftSearches = this.searchTrend.searches.splice(0, 5);
    this.rightSearches = this.searchTrend.searches.splice(5, 5);
  }
}

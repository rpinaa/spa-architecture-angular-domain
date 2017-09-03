import { Component, OnInit } from '@angular/core';

import {OverviewBroadcastService} from '../overview-broadcast.service';
import {PinTrend} from '../instagram/domain/pin-trend';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.styl']
})
export class PinterestComponent implements OnInit {

  pinTrend: PinTrend = null;

  constructor(private overviewBroadcastService: OverviewBroadcastService) {}

  ngOnInit() {
    this.overviewBroadcastService.currentOverview.subscribe(overview => overview.pins && this.bindTrends(JSON.parse(overview.pins)));
  }

  bindTrends(data: string) {
    const trends = data && data.length ? data : [];

    this.pinTrend = new PinTrend(trends);

    this.pinTrend.pins.pop();
  }
}

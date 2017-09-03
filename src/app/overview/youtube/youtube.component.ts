import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {Component, OnInit} from '@angular/core';

import {OverviewBroadcastService} from '../overview-broadcast.service';
import {VideoTrend} from './domain/video-trend';
import {Video} from './domain/video';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.styl']
})
export class YoutubeComponent implements OnInit {

  private static YOU_TUBE_URL = 'https://www.youtube.com/embed/';

  videoTrend: VideoTrend = null;
  popularVideo: Video = null;

  constructor(private overviewBroadcastService: OverviewBroadcastService, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.overviewBroadcastService.currentOverview.subscribe(overview => overview.videos && this.bindTrends(JSON.parse(overview.videos)));
  }

  private bindTrends(data: any) {
    const trends = (data && data.length ? data[0] : data) || {};

    this.videoTrend = new VideoTrend(trends);
    this.popularVideo = this.videoTrend.videos.shift();
  }

  getSanitizerURL(id: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(YoutubeComponent.YOU_TUBE_URL + id);
  }
}

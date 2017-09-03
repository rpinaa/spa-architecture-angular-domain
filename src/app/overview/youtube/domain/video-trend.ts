import {Video} from './video';

export class VideoTrend {

  videos: Video[] = [];

  constructor(data: any | {}) {
    this.videos = data.trends.map(video => new Video(video));
  }
}

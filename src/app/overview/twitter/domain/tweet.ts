import {Trend} from './trend';
import {PopularTrend} from './popular-trend';

export class Tweet {

  trends: Array<Trend> = [];
  popularTrend: PopularTrend = null;

  constructor(data: any) {
    this.trends = data.trends.map(trend => new Trend(trend));
    this.popularTrend = new PopularTrend(data.mostPopularTrend);
  }
}

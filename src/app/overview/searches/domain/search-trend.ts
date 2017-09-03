import {Search} from './search';

export class SearchTrend {

  searches: Search[] = [];

  constructor(data: any) {
    this.searches = data.map(search => new Search(search));
  }
}

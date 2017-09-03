import {TweetTrend} from './tweet-trend';
import {User} from './user';

export class PopularTrend {

  users: Array<User> = [];
  tweets: Array<TweetTrend> = [];

  constructor(mostPopularTrend: any) {
    this.users = mostPopularTrend.mostPopularUsers.map(user => new User(user));
    this.tweets = mostPopularTrend.mostPopularTweets.map(trend => new TweetTrend(trend));
  }
}

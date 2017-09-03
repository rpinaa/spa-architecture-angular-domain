export class TweetTrend {

  id: string;
  name: string;
  created: Date;
  screenName: string;
  bannerImage: string;
  description: string;
  profileImage: string;
  retweetCount: number;
  followerCount: number;
  favoriteCount: number;

  constructor(data: any) {
    this.id = data.id_str;
    this.name = data.user.name;
    this.description = data.text;
    this.created = data.created_at;
    this.retweetCount = data.retweet_count;
    this.screenName = data.user.screen_name;
    this.favoriteCount = data.favorite_count;
    this.followerCount = data.user.followers_count;
    this.bannerImage = data.user.profile_banner_url;
    this.profileImage = data.user.profile_image_url_https;
  }
}

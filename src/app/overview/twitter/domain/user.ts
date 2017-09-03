export class User {

  name: string;
  screenName: string;
  description: string;
  profileImage: string;
  retweetCount: number;
  followerCount: number;
  favoriteCount: number;

  constructor(data: any) {
    this.name = data.user.name;
    this.description = data.text;
    this.retweetCount = data.retweet_count;
    this.screenName = data.user.screen_name;
    this.favoriteCount = data.favorite_count;
    this.followerCount = data.user.followers_count;
    this.profileImage = data.user.profile_image_url_https;
  }
}

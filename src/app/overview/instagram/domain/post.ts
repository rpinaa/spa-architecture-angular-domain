export class Post {

  date: Date;
  code: string;
  caption: string;
  thumbnail: string;
  likeCount: number;
  commentCount: number;

  constructor(data: any) {
    this.date = data.date;
    this.code = data.code;
    this.likeCount = data.likes;
    this.caption = data.caption;
    this.thumbnail = data.thumbnail;
    this.commentCount = data.comments;
  }
}

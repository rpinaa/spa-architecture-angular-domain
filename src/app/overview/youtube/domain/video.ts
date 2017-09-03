export class Video {

  id: string;
  title: string;
  publishedAt: Date;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  channelTitle: string;
  defaultThumbnail: string;
  standardThumbnail: string;

  constructor(data: any) {
    this.id = data.youtubeId;
    this.title = data.title;
    this.viewCount = data.viewCount;
    this.likeCount = data.likeCount;
    this.publishedAt = data.publishedAt;
    this.dislikeCount = data.dislikeCount;
    this.channelTitle = data.channelTitle;
    this.defaultThumbnail = data.thumbnailDefault;
    this.standardThumbnail = data.thumbnailStandard;
  }
}

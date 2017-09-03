export class Pin {

  id: string;
  name: string;
  domain: string;
  image: string;
  createdAt: Date;
  thumbnail: string;
  likeCount: number;
  repinCount: number;
  description: string;

  constructor(data: any) {
    this.name = data.name;
    this.image = data.image;
    this.domain = data.domain;
    this.createdAt = data.date;
    this.id = data.pinterestId;
    this.likeCount = data.likes;
    this.repinCount = data.repins;
    this.thumbnail = data.thumbnail;
    this.description = data.description;
  }
}

export class Search {

  link: string;
  image: string;
  title: string;
  source: string;
  traffic: string;
  description: string;

  constructor(data: any) {
    this.link = data.link;
    this.title = data.title;
    this.image = data.image;
    this.traffic = data.traffic;
    this.source = data.imageSource;
    this.description = data.description;
  }
}

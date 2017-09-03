export class New {

  date: Date;
  url: string;
  image: string;
  title: string;
  newspaper: string;
  description: string;

  constructor(data: any) {
    this.url = data.url;
    this.date = data.date;
    this.title = data.title;
    this.image = data.image;
    this.newspaper = data.newspaper;
    this.description = data.description;
  }
}

export class Trend {

  url: string;
  name: string;

  constructor(data: any) {
    this.url = data.url;
    this.name = data.name;
  }
}

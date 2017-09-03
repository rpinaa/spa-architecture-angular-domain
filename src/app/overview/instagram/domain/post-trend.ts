import {Post} from './post';

export class PostTrend {

  posts: Post[] = [];

  constructor(data: any) {
    this.posts = data.map(post => new Post(post));
  }
}

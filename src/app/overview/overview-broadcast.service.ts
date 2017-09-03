import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {Overview} from './domain/overview';

@Injectable()
export class OverviewBroadcastService {

  private overviewMessage = new BehaviorSubject<Overview>(new Overview());

  currentOverview = this.overviewMessage.asObservable();

  constructor() {}

  bindMessage(message: any) {
    this.overviewMessage.next(message);
  }
}

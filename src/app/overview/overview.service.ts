import {Http, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {AbstractService} from '../common/services/abstract.service';
import {Overview} from './domain/overview';
import {Zone} from './domain/zone';

@Injectable()
export class OverviewService extends AbstractService {

  constructor(http: Http) {
    super(http);
  }

  getZones(): Observable<Zone[]> {

    const params: URLSearchParams = new URLSearchParams();

    params.set('filter', '{"order": "p ASC"}');

    return this.get('/zones', params).map(data => data);
  }

  getOverviews(codes: Object): Observable<Overview> {

    const params: URLSearchParams = new URLSearchParams();

    Object.keys(codes).forEach((key) => params.set(key, codes[key]));

    return this.get('/overviews', params).map(data => data.overview);
  }
}

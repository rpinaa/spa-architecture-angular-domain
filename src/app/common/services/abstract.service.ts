import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';

import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AbstractService {

  constructor(protected http: Http) {}

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headersConfig);
  }

  private catchErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api}${path}`, {
      headers: this.setHeaders(),
      search: params
    })
      .catch(this.catchErrors)
      .map((response: Response) => response.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api}${path}`,
      JSON.stringify(body),
      {
        headers: this.setHeaders()
      }
    )
      .catch(this.catchErrors)
      .map((response: Response) => response.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api}${path}`,
      JSON.stringify(body),
      {
        headers: this.setHeaders()
      }
    )
      .catch(this.catchErrors)
      .map((response: Response) => response.json());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api}${path}`,
      {
        headers: this.setHeaders()
      }
    )
      .catch(this.catchErrors)
      .map((response: Response) => response.json());
  }
}

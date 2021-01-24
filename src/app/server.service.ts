import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Papa} from 'ngx-papaparse';
import {Server} from './server';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  apiUrl = 'http://www.vpngate.net/api/iphone/';

  constructor(private http: HttpClient, private papa: Papa) { }

  getServers(): Observable<Server[]> {
    return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
      map(data => {
        const r = this.papa.parse(data, {
          comments: '*',
          skipEmptyLines: true,
          header: true,
        });
        return r.data;
      }),
    );
  }
}

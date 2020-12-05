import { map } from 'rxjs/Operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.baseUrl;
  }

  httpGet(url: string) {
    return this._http.get(this.url + url).pipe(map((res: any) => res));
  }
}

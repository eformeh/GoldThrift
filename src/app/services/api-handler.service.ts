import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private baseUrl = environment.API_URL.BASE_URL;

  constructor(private httpClient: HttpClient) {
  }

  public header() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  public get(path: string, base?: number): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.get(path, {headers: this.header()});
  }

  public post(path: string, data: any, base?: number): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.post(path, data || {}, {headers: this.header()});
  }

  public put(path: string, data: any): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.put(path, data || {}, {headers: this.header()});
  }

  public patch(path: string, data: any): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.patch(path, data || {}, {headers: this.header()});
  }

  public delete(path: string): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.delete(path, {headers: this.header()});
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

    httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  constructor(private http: HttpClient) { }

  getAvisos() {

    const url = environment.urlAvisos;

    console.log( url );

    return this.http.get( url, { headers: this.httpHeaders } );

  }
}

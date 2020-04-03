import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Aviso } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

    httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  constructor(private http: HttpClient) { }

  getAvisos() {

    const url = environment.urlAvisos + '/312500';

    return this.http.get<Aviso[]>( url, { headers: this.httpHeaders } );

  }
}

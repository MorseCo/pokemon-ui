import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlaskService {
  FLASK_URL: string = "http://127.0.0.1:5000/pokemon/"
  constructor(
    private http: HttpClient
  ) { }

  getPokemon(pokemon: string): Observable<Object> {
    let headers = new HttpHeaders();
    headers = headers.set( 'Access-Control-Allow-Origin', '*')
    .set('Content-Type', 'application/json')
    .set('Acces-Control-Allow-Methods', 'GET')
    return this.http.get<Object>(
      this.FLASK_URL + pokemon, 
      {
        headers
      }
    );
  }

  getSimplePokemon(pokemon: string): Observable<Object> {
    let headers = new HttpHeaders();
    headers = headers.set( 'Access-Control-Allow-Origin', '*')
    .set('Content-Type', 'application/json')
    .set('Acces-Control-Allow-Methods', 'GET')
    return this.http.get<Object>(
      this.FLASK_URL + 'simple/' + pokemon, 
      {
        headers
      }
    );
  }

  getRandomPokemon(): Observable<Object> {
    let headers = new HttpHeaders();
    headers = headers.set( 'Access-Control-Allow-Origin', '*')
    .set('Content-Type', 'application/json')
    .set('Acces-Control-Allow-Methods', 'GET')
    return this.http.get<Object>(
      this.FLASK_URL + 'random/', 
      {
        headers
      }
    );
  }


  getSimpleRandomPokemon(): Observable<Object> {
    let headers = new HttpHeaders();
    headers = headers.set( 'Access-Control-Allow-Origin', '*')
    .set('Content-Type', 'application/json')
    .set('Acces-Control-Allow-Methods', 'GET')
    return this.http.get<Object>(
      this.FLASK_URL + 'simple/random/', 
      {
        headers
      }
    );
  }


}


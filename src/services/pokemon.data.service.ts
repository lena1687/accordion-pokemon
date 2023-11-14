import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {IPokemonListItem, IPokemonListResponse} from "../models/Pokemons";

@Injectable({
  providedIn: 'root',
})

export class PokemonDataService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=:limit';

  constructor(private http: HttpClient) {}

  getList(limit:number): Observable<IPokemonListResponse> {
    const currentUrl = `${this.apiUrl}?limit=:${limit}`;
    return this.http.get<IPokemonListResponse>(currentUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  getItem(url:string): Observable<Array<IPokemonListItem>> {
    return this.http.get<Array<IPokemonListItem>>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
        return throwError('Something went wrong; please try again later.');
      })
    )
  };
}

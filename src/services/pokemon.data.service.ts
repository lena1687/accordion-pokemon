import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

export interface IPokemonListResponse {
  count: number,
  next: string,
  previous: null,
  results: Array<IPokemonListItem>
}

export interface IPokemonListItem {
  name: string,
  url: string,
}

export interface IPokemonDetails {
  sprites: IPokemonSprite
}

export interface IPokemonSprite {
  front_default: string
}

@Injectable({
  providedIn: 'root',
})

export class PokemonDataService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getList(limit:number): Observable<IPokemonListResponse> {
    const currentUrl = `${this.apiUrl}?limit=${limit}`;
    return this.http.get<IPokemonListResponse>(currentUrl);
  }

  getItem(url:string): Observable<IPokemonDetails> {
    return this.http.get<IPokemonDetails>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
        return throwError('Something went wrong; please try again later.');
      })
    )
  };
}

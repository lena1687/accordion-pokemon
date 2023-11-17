import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface IPokemonListResponse {
  count: number,
  next: string,
  previous: null,
  results: Array<IPokemonListItem>
}

export interface IPokemonListItem {
  name: string,
  url: string,
  details?: IPokemonDetails
}

export interface IPokemonDetails {
  name: string,
  image: string
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
    return this.http.get<any>(url).pipe(
      map((response) =>  ({ name: response.name, image: response.sprites.front_default}
      ))
    )
  }
}

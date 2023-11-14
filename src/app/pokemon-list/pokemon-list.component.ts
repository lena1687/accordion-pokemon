import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from "../../services/pokemon.data.service";
import {IPokemonListItem, IPokemonListResponse} from "../../models/Pokemons";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  list: Array<IPokemonListItem> = [];
  limit: number = 100;

  constructor(private dataService: PokemonDataService) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    const limitValue = this.limit > 2 ? this.limit : 2;
    this.dataService.getList(limitValue).subscribe(
      (response: IPokemonListResponse) => {
        response['results'].forEach((pokemon) => {
          this.list.push({name: pokemon.name, url: pokemon.url});
        });
      },
    );
  }
}

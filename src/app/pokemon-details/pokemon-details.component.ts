import {Component, Input} from "@angular/core";
import {IPokemonListItem} from "../../models/Pokemons";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent {
  @Input() pokemon: IPokemonListItem = {} as IPokemonListItem
}

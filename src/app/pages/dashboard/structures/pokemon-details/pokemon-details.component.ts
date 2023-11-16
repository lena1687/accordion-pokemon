import {Component, Input} from "@angular/core";
import {IPokemonDetails, IPokemonListItem} from "../../../../../models/Pokemons";
import {PokemonDataService} from "../../../../../services/pokemon.data.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent {
  @Input() set pokemon(value: IPokemonListItem) {
    const {name, url} = value;
    this.name = name;
    this.imgPath = url;
  }

  name:string = '';
  imgPath: string = '';
  content: IPokemonDetails = { 'sprites': { 'back_default': '' }};

  constructor(private dataService: PokemonDataService) {}

  toggleAccordion() {
    this.dataService.getItem(this.imgPath).subscribe(
      (response: Array<IPokemonListItem>) => {
        this.content = response;
        this.imgPath = this.content['sprites'] ? this.content['sprites']['back_default']  : '';
      }
    )
  }
}

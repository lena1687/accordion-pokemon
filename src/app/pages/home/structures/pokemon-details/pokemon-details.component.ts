import {Component, Input} from "@angular/core";
import {IPokemonListItem, PokemonDataService} from "../../../../../services/pokemon.data.service";

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

  constructor(private dataService: PokemonDataService) {}

  toggleAccordion() {
    this.dataService.getItem(this.imgPath).subscribe(
      (response) => {
        this.imgPath = response.sprites.front_default;
      }
    )
  }
}

import {Component, Input} from "@angular/core";
import {IPokemonDetails, IPokemonListItem} from "../../models/Pokemons";
import {PokemonDataService} from "../../services/pokemon.data.service";
import {LoaderService} from "../../services/loader.service";

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
  isExpanded: boolean = false;
  isLoaded: boolean = true;


  constructor(private dataService: PokemonDataService, public loaderImageService: LoaderService) {
    this.loaderImageService.loadingStatuses$.subscribe(statuses => {
      this.isLoaded = !statuses[this.name];
    });
  }

  toggleAccordion() {
    this.isExpanded = !this.isExpanded;
    if(this.isExpanded && this.isLoaded) {
      this.getDetails();
    }
  }

  getDetails() {
    this.dataService.getItem(this.imgPath).subscribe(
      (response: Array<IPokemonListItem>) => {
        this.loaderImageService.startLoading(this.name);
        setTimeout(() => {
          this.loaderImageService.stopLoading(this.name);
        }, 500);
        this.content = response;
        this.imgPath = this.content['sprites'] ? this.content['sprites']['back_default']  : '';
      }
    )
  }
}

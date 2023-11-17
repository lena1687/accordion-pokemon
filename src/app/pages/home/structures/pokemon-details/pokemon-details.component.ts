import { Component, Input } from '@angular/core';
import { IPokemonDetails } from '../../../../../services/pokemon.data.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  @Input() details!: IPokemonDetails;
}

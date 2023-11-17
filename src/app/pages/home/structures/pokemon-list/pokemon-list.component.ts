import {Component, OnInit} from '@angular/core';
import {IPokemonListItem, IPokemonListResponse, PokemonDataService} from "../../../../../services/pokemon.data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  limit: string = '';
  items: Array<IPokemonListItem> = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number = Math.ceil(this.items.length / this.itemsPerPage);

  get itemsOnCurrentPage(): Array<IPokemonListItem> {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  constructor(private dataService: PokemonDataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.limit = params['limit'];
    });
    this.getData()
  }

  getData() {
    const limitValue = +this.limit > 2 ? +this.limit : 2;
    this.dataService.getList(limitValue).subscribe(
      (response: IPokemonListResponse) => {
        response['results'].forEach((pokemon) => {
          this.items.push(pokemon);
          this.totalPages =  Math.ceil(this.items.length / this.itemsPerPage);
        });
      },
    );
  }

  toggleAccordion(item:IPokemonListItem) {
    if(item.details) return
    this.dataService.getItem(item.url).subscribe(
      (details) => {
        item.details = details;
      }
    )
  }
}

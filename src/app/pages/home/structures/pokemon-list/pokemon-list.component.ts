import { Component, OnInit } from '@angular/core';
import {
  IPokemonListItem,
  IPokemonListResponse,
  PokemonDataService,
} from '../../../../../services/pokemon.data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  limit: number = 20;
  offset: number = 0;
  items: Array<IPokemonListItem> = [];
  totalPages: number = 0;

  get currentPage(): number {
    return Math.ceil(this.offset / this.limit) + 1;
  }

  changePage(page: number): void {
    this.offset = (page - 1) * this.limit;
    void this.router.navigate([], {
      queryParams: { offset: this.offset.toString() },
      queryParamsHandling: 'merge',
    });
    this.getData();
  }

  constructor(
    private dataService: PokemonDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.limit = Number(params['limit'] ?? this.limit);
      this.offset = Number(params['offset'] ?? this.offset);
      if (this.limit < 2) {
        this.limit = 2;
        void this.router.navigate([], {
          queryParams: { limit: this.limit.toString() },
          queryParamsHandling: 'merge',
        });
      }
    });
    this.getData();
  }

  getData() {
    this.dataService
      .getList(this.limit, this.offset)
      .subscribe((response: IPokemonListResponse) => {
        this.totalPages = Math.ceil(response.count / this.limit);
        this.items = response.results;
      });
  }

  toggleAccordion(item: IPokemonListItem) {
    if (item.details) return;
    this.dataService.getItem(item.url).subscribe((details) => {
      item.details = details;
    });
  }
}

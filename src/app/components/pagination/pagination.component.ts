import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageSelected = new EventEmitter<number>();

  selectPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && this.currentPage !== page) {
      this.currentPage = page;
      this.pageSelected.emit(page);
    }
  }
}

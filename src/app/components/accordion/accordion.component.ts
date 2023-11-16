import {Component, Input, Output, EventEmitter} from "@angular/core";
import {LoaderService} from "../../../services/loader.service";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {
  @Input() name: string = '';
  isExpanded: boolean = false;
  isLoaded: boolean = true;
  @Output() onClick = new EventEmitter<MouseEvent>();

  constructor(public loaderImageService: LoaderService) {
    this.loaderImageService.loadingStatuses$.subscribe(statuses => {
      this.isLoaded = !statuses[this.name];
    });
  }

  toggleAccordion(event: MouseEvent) {
    this.isExpanded = !this.isExpanded;
    if(this.isExpanded && this.isLoaded) {
      this.onClick.emit(event);
      this.loaderImageService.startLoading(this.name);
      setTimeout(() => {
        this.loaderImageService.stopLoading(this.name);
      }, 500);
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoaderService {
  private loadingStatusesSubject = new BehaviorSubject<{ [key: string]: boolean }>({});
  loadingStatuses$ = this.loadingStatusesSubject.asObservable();

  startLoading(key: string, status: boolean = true) {
    const currentStatuses = this.loadingStatusesSubject.value;
    currentStatuses[key] = status;
    this.loadingStatusesSubject.next({ ...currentStatuses });
  }

  stopLoading(key: string) {
    this.startLoading(key, false);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public spinnerEmitter: Observable<boolean> = this.spinner.asObservable();

  constructor() { }

  show = () => {
    this.spinner.next(true);
  }

  hide = () => {
    this.spinner.next(false);
  }

}

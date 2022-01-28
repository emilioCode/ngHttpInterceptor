import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  show: boolean = false;
  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.spinnerEmitter.subscribe( (value:boolean) => {
      this.show = value;
    });
  }
}

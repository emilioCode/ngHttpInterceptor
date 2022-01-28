import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // every http request pass through this service
    console.log(req) 
    // first behavior by default to initialize the http request and call the spinner
    this.spinnerService.show();
    return next.handle(req).pipe(
      // when finalize the request to come or responde its executes the next
      finalize( () => {
        this.spinnerService.hide();
      })
    )
  }
}



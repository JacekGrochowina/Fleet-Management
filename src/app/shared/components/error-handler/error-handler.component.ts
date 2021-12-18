import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
})
export class ErrorHandlerComponent implements OnInit {
  @Input() error!: Observable<HttpErrorResponse | null>;

  errorMessage!: string;
  isShow: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    if (this.error) {
      // this.errorMessage = this.error.error.message;
      this.error.pipe(takeUntil(this.unsubscribe$)).subscribe((error) => {
        if (error) {
          this.isShow = true;
          this.errorMessage = error.error.message;
        }
      });
    }
  }
}

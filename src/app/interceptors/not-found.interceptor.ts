import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

export const notFoundInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(catchError((error) => {

    if (error instanceof HttpErrorResponse) {
      if (error.status == 404) {
        router.navigate(['/not-found'], { skipLocationChange: true })
      }
    }

    throw error;

  }));
};

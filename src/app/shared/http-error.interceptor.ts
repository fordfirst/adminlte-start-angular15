import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { retry, catchError, switchMap, take, filter } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AuthLogicService } from '@services/authLogic.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        private injector: Injector,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error)
                    return throwError(this.handleErrorMessage(error));
                })
            )

    }

    handleErrorMessage(error: HttpErrorResponse): string {
        if (error.status == 422) {
            return JSON.stringify(error.error.detail ? error.error.detail : error.message)
        } else if (error.status == 401) {
            AuthLogicService.sessionDestroy();
            window.location.replace('auth/login');
        } else {
            return error.error.message ? error.error.message : error.message

        }
    }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* add auth header with jwt if user is logged in and request is to the api url */
        if (
            request.url === 'assets/tmp/i18n/en-US.json' ||
            request.url === 'assets/tmp/app-data.json' ||
            request.url === 'http://13.212.68.212:7789/user_login' ||
            request.url === 'https://52.221.187.224/user/user_login' ||
            request.url === 'https://52.221.187.224/user_login'
        ) {
            return next.handle(request);
        }
        const user = this.authService.userValue;
        const isLoggedIn = user && user.token;
        if (this.isHeaderNeeded(request.url)) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`,
                    userId: `${user.userId}`,
                },
            });
        }
        return next.handle(request);
    }
    isHeaderNeeded(url: string) {
        if (url.split('/')[2] == '13.212.68.212:7789') {
            if (url.split('/')[3] == 'user_login' || url.split('/')[3] == 'user_registration') {
                return false;
            } else {
                return true;
            }
        }
        return true;
    }
}

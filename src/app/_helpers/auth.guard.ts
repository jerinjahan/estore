import { Injectable } from '@angular/core';
import { AuthService } from '../_services';
import { User } from '../_models';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    private userSubject?: BehaviorSubject<User>;
    public user?: Observable<User>;

    constructor(private router: Router, private authService: AuthService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService.userValue;
        if (user) {
            return true;
        }
        /*** not logged in so redirect to login page with the return url ***/
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        // this.router.navigateByUrl(this.tokenService.login_url!);
        return false;
    }
}

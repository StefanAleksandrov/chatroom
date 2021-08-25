import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

// Services
import { AuthService } from "src/app/auth/auth.service";

@Injectable()
export class AuthActivate implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const {authenticationRequired, authenticationFailureRedirectUrl} = route.data;

        if (typeof authenticationRequired == 'boolean' && authenticationRequired == this.authService.isLogged()) return true;
        return this.router.parseUrl(authenticationFailureRedirectUrl || '/');
    }
}
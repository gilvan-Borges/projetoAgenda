import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class LoginGuard {


    constructor(
        private router: Router
    ) { }


    canActivate(): boolean {
        if(sessionStorage.getItem('usuario')) {
            return true;
        } else {
            this.router.navigate(['/autenticar-usuario']);
            return false;
        }
    }
}



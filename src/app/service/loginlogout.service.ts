import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';

@Injectable()
export class LoginLogoutService {
    constructor(private appState: AppState,
                private router: Router) {
    }
    public Login(loginModel: any) {
        localStorage.setItem('JWT', loginModel.accessToken);
        localStorage.setItem('FirstName', loginModel.firstName);
        localStorage.setItem('UserName', loginModel.userName);
        this.appState.set('loggedIn', true);
        this.router.navigate(['/pages']);
    }
    public Logout() {
        localStorage.removeItem('JWT');
        localStorage.removeItem('FirstName');
        localStorage.removeItem('UserName');
        this.appState.set('loggedIn', false);
        this.router.navigate(['/']);
    }
}

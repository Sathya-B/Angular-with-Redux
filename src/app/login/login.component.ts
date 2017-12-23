import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from "../service/loginlogout.service";
import { ApiService } from "../service/api.service";
import { NgForm } from "@angular/forms/src/forms";
import * as Conf from '../config/configuration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginLogout: LoginLogoutService,
              private apiService: ApiService) { }

  ngOnInit() {
  }

  public  onSignin(form: NgForm) {
    const loginDetails = form.value;
    this.apiService.post('/login', loginDetails, undefined, Conf.apiUrl.authServer).then(
      (response: any) => {
        if (response.value === undefined) {
          throw response.error;
        }
        if (response.value.code === '999') {
          let loginModel = { accessToken: response.value.data,
                             firstName: response.value.content.FirstName,
                             userName: loginDetails.UserName};
          this.loginLogout.Login(loginModel);
        }
      })
      .catch(
      (error: any) => {
        if (error.code === '402') {
          window.alert('Wrong Credentials. Please try again');
        }
        if (error.code === '404') {
          window.alert('User not Found. Please contact Admin.');
        }
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from "../../service/loginlogout.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  firstName: string = "";
  constructor(private loginLogout: LoginLogoutService) { }

  ngOnInit() {
    if(localStorage.getItem("FirstName") != undefined) {
      this.firstName = "Hi " + localStorage.getItem("FirstName") + "!";
    }
  }

  logout(){
    this.loginLogout.Logout();    
  }

}

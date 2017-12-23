import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from "../../service/loginlogout.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private loginLogout: LoginLogoutService) { }

  ngOnInit() {
  }

  logout(){
    this.loginLogout.Logout();
  }

}

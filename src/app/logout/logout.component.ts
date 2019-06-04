import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticated: AuthenticationService,
              private service: WelcomeDataService) { }

  ngOnInit() {
    this.authenticated.logout();
    this.service.logout().subscribe(
      (response) => console.log(response.text),
      err => console.log(err),
      () => console.log('logout working..')
    );
  }

}

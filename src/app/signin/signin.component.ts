import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
              private router: Router,
              private authenticationService: AuthenticationService
              ) { }

  ngOnInit() {
  }

  handleJWTAuthLogin() {
    this.authenticationService.executeJWTAuthenticationService(this.username, this.password)
         .subscribe(
           data => {console.log(data);
                    this.router.navigate(['welcome', data.username]);
                    this.invalidLogin = false;
           },
           error => {
             console.log(error);
             this.invalidLogin = true;
           }
         );
  }

}

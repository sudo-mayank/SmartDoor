import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
              private router: Router,
              private authenticationService: AuthenticationService
              ) { }

  ngOnInit() {
  }

  handleJWTAuthLogin(email, password) {
    console.log(email, password);
    this.authenticationService.executeJWTAuthenticationService(this.email, this.password)
         .subscribe(
           data => {console.log(data);
                    this.router.navigate(['dashboard']);
                    this.invalidLogin = false;
           },
           error => {
             console.log(error);
             this.invalidLogin = true;
           }
         );
  }

}

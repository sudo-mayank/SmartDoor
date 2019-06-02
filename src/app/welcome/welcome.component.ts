import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomemessage: string ;
  message = 'Some Message Here';
  name = '';

  constructor(private service: WelcomeDataService,
              private route: ActivatedRoute
             ) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
    console.log(this.name);
  }

  getWelcomeMessage() {
    this.service.retrieveUserData().subscribe(
      response => this.handleSuccessFulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('get welcome message');
  }

  handleSuccessFulResponse(response) {
    this.welcomemessage = (response.message);
  }

  handleErrorResponse(error) {
    this.welcomemessage = (error.error.message);
  }


}

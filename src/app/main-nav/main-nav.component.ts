import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { adslist } from '../service/classes/adslist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  welcomemessage: string;
  lists: any[] = [];
  adslists: adslist[] = [];
  message = 'Some Message Here';
  name = '';
  Id: any = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authenticationService: AuthenticationService,
              private service: WelcomeDataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
    this.getdcdlists();
  }

  handleSuccessFulResponse(response) {
    this.welcomemessage = (response);
    this.lists = (response.list);
    this.adslists = (response.list);
  }

  handleErrorResponse(error) {
    this.welcomemessage = (error.error.message);
  }

  getdcdlists() {
    this.service.getListDCDs().subscribe(
      (response) => this.handleSuccessFulResponse(response),
      err => this.handleErrorResponse(err),
      () => console.log('getdcdlists working..')
    );
  }

  getadslist(id) {
    return this.service.getListADs()
      .subscribe(response => {
        this.adslists = response.list
          .filter(adslists => (adslists.dcdId) === id);
        console.log(response);
        console.log(this.adslists);
      },
        errors => {
          console.log(errors);
        });
  }

  toggle(){
    return true;
  }

}

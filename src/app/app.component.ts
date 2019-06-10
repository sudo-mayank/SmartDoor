import { Component } from '@angular/core';
import { USER_LIST_CHECK } from './main-nav/main-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartdoor';

  getnavlist() {
    return sessionStorage.getItem(USER_LIST_CHECK);
  }
}



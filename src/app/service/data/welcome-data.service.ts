import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL,API_URL_1 } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  retrieveUserData() {
    return this.http.get<any>(`${API_URL}/auth/signIn`);
  }

  getListDCDs() {
    return this.http.get(`${API_URL}/api/dcd?max=2&offset=0`);
  }
  // https://smartdoor.ml/api/dcd?max=2&offset=0
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  logout() {
    return this.http.post<any>(`${API_URL}/auth/logout`, httpOptions);
  }

  getListDCDs() {
    return this.http.get(`${API_URL}/api/dcd?max=2&offset=0`);
  }

  getListADs(): Observable<any> {
    return this.http.get(`${API_URL}/api/dcd/dcdId/ad?max=2&offset=0`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BatteryDataService {

  constructor(private http: HttpClient) { }

  getbatteryalllist(dcdId, adId) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/battery?max=2&offset=0`);
  }

  getbatterylist(dcdId, adId, id) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/battery/${id}`);
  }

  putbatterylist(dcdId, adId, id, battery) {
    return this.http.put(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/battery/${id}`, battery, httpOptions);
  }
}

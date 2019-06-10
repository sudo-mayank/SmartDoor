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
export class CabinetDataService {

  constructor(private http: HttpClient) { }

  getcabinetalllist(dcdId, adId) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/cabinet?max=2&offset=0`);
  }

  getcabinetlist(dcdId, adId, id) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/cabinet/${id}`);
  }

  putcabinetlist(dcdId, adId, id, cabinetlist) {
    return this.http.put(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/cabinet/${id}`, cabinetlist, httpOptions);
  }
}

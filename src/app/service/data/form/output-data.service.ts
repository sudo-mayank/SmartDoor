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
export class OutputDataService {

  constructor(private http: HttpClient) { }

  getoutputalllist(dcdId, adId) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/output?max=2&offset=0`);
  }

  getoutputlist(dcdId, adId, id) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/output/${id}`);
  }

  putoutputlist(dcdId, adId, id, outputlist) {
    return this.http.put(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/output/${id}`, outputlist, httpOptions);
  }
}

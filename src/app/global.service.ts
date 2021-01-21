import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
apiurl='https://api.covidindiatracker.com/'
  constructor(private http: HttpClient) { }

  getlistdata(){
    return this.http.get(this.apiurl+'state_data.json');
  }
  getalldata(){
    return this.http.get(this.apiurl+'total.json');
  }
}

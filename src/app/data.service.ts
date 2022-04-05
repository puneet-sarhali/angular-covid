import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {

  stats: Object = {};

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  callApi(){
    let url = "https://api.opencovid.ca/timeseries?stat=cases&loc=prov&date=01-09-2020"
    return this.http.get(url)
  }
}


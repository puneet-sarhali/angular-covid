import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from '../app/data'
import { InputData } from '../app/inputData'


@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  callApi(url: string){
    return this.http.get<Data[]>(url);
  }


}


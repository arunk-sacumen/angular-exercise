import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {

  }

  getUsers() : Observable<any>{
    return this.http.get("/users");
  }

  getPosts() : Observable<any>{
    return this.http.get("/posts");
  }

}

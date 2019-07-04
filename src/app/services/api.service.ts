import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Headers, RequestOptions } from '@angular/http';


 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }
 
  getFilms() {
    //api call
    //return this.http.get('http://localhost:8080/api/read.php');
    return this.http.get('http://127.0.0.1:8080/AdminPanel/public/api/articles');
    
    }

   
 



 
}
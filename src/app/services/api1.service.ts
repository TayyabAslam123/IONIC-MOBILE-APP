import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  constructor(private http: HttpClient) { }
 
  getFilms() {
    //api call
    return this.http.get('http://172.16.35.164:8080/api/ngo.php');
    
    
  }
 
}

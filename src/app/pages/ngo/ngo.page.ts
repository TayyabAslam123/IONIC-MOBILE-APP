

import { Api1Service } from '../../services/api1.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.page.html',
  styleUrls: ['./ngo.page.scss'],
})
export class NgoPage implements OnInit {

  ngos: Observable<any>;

  constructor(private router: Router, private api: Api1Service,private http: HttpClient) { }

  ngOnInit(){
  
   this.ngos=this.api.getFilms();
}


dataSendKarsi(name, body) {
  let bod = {
    name: name,
    body: body,
  };
  console.log(bod);
  this.http.post('http://172.16.35.164:8080/api/create.php', bod).subscribe((response) => {
    console.log(response);
    
  });
}


}
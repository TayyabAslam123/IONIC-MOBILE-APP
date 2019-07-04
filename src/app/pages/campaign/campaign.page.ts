import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: ['./campaign.page.scss'],
})
export class CampaignPage implements OnInit {

  

  campaigns: Observable<any>;

  constructor(private router: Router, private api: ApiService,private http: HttpClient) { }

  ngOnInit(){
  
 
   //this.api.getFilms()
   //.subscribe((resp) => { console.log(resp)});
this.campaigns=this.api.getFilms();
}///

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


lolo(name) {
  let bod = {
    name: name,
    
  };
  console.log(bod);
  this.http.post('http://localhost:8080/api/create.php', bod).subscribe((response) => {
    console.log(response);
    
  });
}










}//

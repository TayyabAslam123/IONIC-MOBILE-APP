
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.page.html',
  styleUrls: ['./campaign-detail.page.scss'],
})
export class CampaignDetailPage implements OnInit {

  
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }


  data(val) {
    let bod = {
      val: val,
  
    };
    console.log(bod);
    this.http.post('http://192.168.0.101:8080/api/campaign_detail.php', bod).subscribe((response) => {
      console.log(response);
      
    });
  }

}

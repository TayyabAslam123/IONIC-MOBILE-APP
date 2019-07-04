import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-msg',
  templateUrl: './msg.page.html',
  styleUrls: ['./msg.page.scss'],
})
export class MsgPage implements OnInit {


  msg: Observable<any>;

  constructor(private router: Router,private http: HttpClient) { }

 

  ngOnInit() {
  }

  dataSendKarsi(name,email,subject,message) {
    let bod = {
      name: name,
      email: email,
      subject: subject,
      messsge: message,

    };
    console.log(bod);
    this.http.post('http://172.16.35.164:8080/api/msg_create.php', bod).subscribe((response) => {
      console.log(response);
      
    });
  }





}

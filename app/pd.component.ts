import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-heroes',
  templateUrl: './pd.component.html',
  styleUrls: ['./pd.component.css']
})
export class PDComponent implements OnInit {
count : number;
 name:string;
 state:string
 /*
  constructor(
    private router: Router) { }

 
  ngOnInit(): void {
    console.log('am in PD')
  };
  
  gotoDetail(): void {
    this.router.navigate(['/detail']);
  };
  
  */
  
  constructor(
  private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  console.log('am here')
  
   this.http.get('http://localhost:8085/rest/process-instance').subscribe(data => {
      console.log(data);
      this.count=2;
      this.name = data[0].definitionId;
      this.state= 'OK';
      
    }); 
  }

  gotoDetail(): void {
    const link = ['/detail'];
    this.router.navigate(link);
  }
}

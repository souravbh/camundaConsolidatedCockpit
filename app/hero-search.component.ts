import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: []
})
export class HeroSearchComponent implements OnInit {
 count : number;
 name:string;
 state:string
 
  constructor(
  private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  console.log('am here')
  
   this.http.get('http://localhost:8085/rest/process-instance').subscribe(data => {
      console.log(data);
      var key
      for (key in data)
      {
      this.count++;
      }
      this.name = data[0].definitionId;
      this.state= 'OK';
      
    }); 
  }

  gotoDetail(): void {
    const link = ['/detail'];
    this.router.navigate(link);
  }
}
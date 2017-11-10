import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   
processInstance: any

processDefinition: any

  constructor(
  private http: HttpClient,
   private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  
  this.http.get('http://localhost:8085/rest/history/process-instance').subscribe(data => {
    this.processInstance = data;
      console.log(data);
    }); 
    
    this.http.get('http://localhost:8085/rest/process-definition').subscribe(data => {
    this.processDefinition = data[0];
      console.log(this.processDefinition);
    }); 
console.log('am in details')
  };
  
    goToVariable(key: string): void {
    const link = ['/dashboard', key];
    this.router.navigate(link);
  }
}

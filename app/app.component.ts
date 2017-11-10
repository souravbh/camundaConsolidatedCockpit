import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Consolidated-Cookpit';
   results: string;
   
  constructor(
  private http: HttpClient,
   private router: Router) {}
  
  ngOnInit(): void{
    this.createCircle('runningCanvas','green');
    this.createCircle('humanCanvas','blue');
    this.createCircle('openCanvas','grey');
    
    this.createSmallCircle('pd1','grey');
    this.createSmallCircle('pd2','grey');
    this.createSmallCircle('pd3','grey');
    this.createSmallCircle('pd4','grey');
    
    this.http.get('http://localhost:8085/rest/process-instance/count').subscribe(data => {
        this.results = data["count"];
      console.log(data["count"]);
    });  
   
  };
  
  gotoDetail(): void {
    const link = ['pd'];
    this.router.navigate(link);
  };
  
   gotoDetail1(): void {
    const link = ['dashboard'];
    this.router.navigate(link);
  };
  
  createCircle(id, color): void{
   var canvas = <HTMLCanvasElement> document.getElementById(id);
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
  };
  
  createSmallCircle(id, color): void{
   var canvas = <HTMLCanvasElement> document.getElementById(id);
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 45;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
  };
}

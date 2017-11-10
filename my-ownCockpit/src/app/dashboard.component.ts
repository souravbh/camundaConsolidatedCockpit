import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

varKey: string;

dataKey: string[];

varData : any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {
    this.varKey = route.snapshot.params['key']
    this.dataKey=[];
  }

  ngOnInit(): void {
    console.log('here' + this.varKey)
    
    var url= 'http://localhost:8080/rest/process-instance/' + this.varKey+ '/variables'
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.varData = data;
      var key;
      for (key in this.varData) {    
        this.dataKey.push(key);
            }
    });  
  }


}

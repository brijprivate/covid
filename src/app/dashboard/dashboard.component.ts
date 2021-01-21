import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  coviddata: any={};

  constructor(public router:Router, public global:GlobalService) { }

  ngOnInit() {
    this.getalldata()
  }

  getalldata(){
    this.global.getalldata().subscribe((res:any)=>{
      this.coviddata=res;
    },err=>{
      console.log(err)
    })
  }
  navigateto(url){
    this.router.navigateByUrl(url)
  }
}

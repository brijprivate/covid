import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  displayedColumns: string[] = ['State', 'Confirmed', 'Recovered', 'Deaths'];

  coviddata: any=[];
  id: any='';
  districdata: any={};

  constructor(public router:Router, public global:GlobalService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      this.id = event.id;
      this.getlistdata();

     });

  }

  getlistdata(){
    this.global.getlistdata().subscribe((res:any)=>{
      if(this.id=='state'){
        this.displayedColumns[0] = 'State'

        this.coviddata=res;
      }
      else{
        this.filterarr(res)
      }

    },err=>{
      console.log(err)
    })
  }
  filterarr(arr){
    this.districdata=arr.filter(x=>x.id==this.id)
    console.log(this.districdata[0].districtData);
    this.coviddata=this.districdata[0].districtData;
    this.displayedColumns[0] = 'Name'

  }
  navigateto(url){
    // console.log(url)
    this.router.navigateByUrl(url)
  }

}



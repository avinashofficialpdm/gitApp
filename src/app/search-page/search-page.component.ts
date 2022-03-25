import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../github.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  username:any
  userInfo:any
  isAvail:any
  createdDate:any
  // createdDate:Date= new Date()

  constructor( private git:GithubService,private datePipe: DatePipe,private rout:Router) { 

    if(localStorage.getItem("username")){

    }else{
      alert("Please login")
      rout.navigateByUrl("")
    }
  }

 
  ngOnInit(): void {
  }

  getUsers() {
    this.git.getData(this.username).subscribe(data=>{
      console.log(data);
        this.userInfo=data
        this.isAvail=true
        this.createdDate=this.datePipe.transform(this.userInfo.created_at, 'MMM d, y')
    })
  }

  logout(){
    localStorage.removeItem("username")
    this.rout.navigateByUrl("")
  }
}

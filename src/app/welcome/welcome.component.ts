import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username:any
  password:any

  isLogin=false
  constructor( private db:GithubService) { }

  ngOnInit(): void {
  }

  login(){
    const result= this.db.login(this.username,this.password)
  

    // if(result){
    //   alert("login success")
    // }else{
    //   alert("Incorrect password")
    // }
  }
}

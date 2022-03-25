import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  name:any
  username:any
  password:any

  constructor(private db:GithubService,private rout:Router) { }

  ngOnInit(): void {
  }

  register(){
    const result=this.db.storeData(this.name,this.username,this.password)
    if(result){
      alert("Added successfully")
      this.rout.navigateByUrl("/welcome")
    }
    else{
      alert("Already exist")
      this.rout.navigateByUrl("/welcome")
    }
  }


}

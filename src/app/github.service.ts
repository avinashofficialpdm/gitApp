import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  database: any = {
    "neer": { name: "hello", uname: "Neer", password: 1000}
  }
  constructor(private http:HttpClient,private rout:Router) { }

  getData(user:any){
    return this.http.get('https://api.github.com/users/'+user+'')
  }

  storeData(name:any,username:any,password:string){
    let database=this.database
    if (username in database) {
      // alert("Already exists")
      return false
    }
     else {
      database[username] = {
        name,
        username,
        password
      }
      console.log(database);
      return true
    }
  }

  login(username:any,password:string){
    let database=this.database

    if(username in database){
      if(database[username].password==password){
        this.rout.navigateByUrl("/app-open-page")
        localStorage.setItem("username",username)
      }else{
        alert("Incorrect Password")
      }
    }else{
      alert("Account not found")
    }
  }
}


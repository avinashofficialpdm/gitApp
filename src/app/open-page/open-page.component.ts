import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-page',
  templateUrl: './open-page.component.html',
  styleUrls: ['./open-page.component.css']
})
export class OpenPageComponent implements OnInit {

  currentUser=localStorage.getItem("username")
  constructor() { }

  ngOnInit(): void {
  }

}

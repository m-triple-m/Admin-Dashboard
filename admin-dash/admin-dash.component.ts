import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  admin;
  seller;
  showmanageuser = false;
  showmanageseller = false;
  showstats = false;

  constructor() { }

  ngOnInit(): void {
    this.admin = JSON.parse(sessionStorage.getItem("user"))
  }

  hideall(){
    this.showmanageuser = false;
    this.showmanageseller = false;
    this.showstats = false;
  }

  togglemanageuser(){
    this.hideall();
    this.showmanageuser = true;
  }

  togglemanageseller(){
    this.hideall();
    this.showmanageseller = true;
  }

  toggleShowStats(){
    this.hideall();
    this.showstats = true;
  }
}

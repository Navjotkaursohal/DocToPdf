import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, OnChanges, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, HttpService } from 'src/app/core/services';
import { DomSanitizer } from '@angular/platform-browser';
// import $ from "jquery";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public loading = false;

  constructor(private _http: HttpService,
    private router: Router,
    private dtPipe: DatePipe,
    private _auth: AuthService,
   private sanitizer: DomSanitizer,
    public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.SetRestaurantName(`Overview`);
    
  }



}


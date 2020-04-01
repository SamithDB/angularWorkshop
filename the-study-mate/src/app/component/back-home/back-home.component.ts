import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home',
  templateUrl: './back-home.component.html',
  styleUrls: ['./back-home.component.css']
})
export class BackHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['home']);
  }
}

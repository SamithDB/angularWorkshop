import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home-button',
  templateUrl: './back-home-button.component.html',
  styleUrls: ['./back-home-button.component.css']
})
export class BackHomeButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['home']);
  }
}

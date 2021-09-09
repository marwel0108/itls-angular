import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gotodashboard',
  templateUrl: './gotodashboard.component.html',
  styleUrls: ['./gotodashboard.component.css']
})
export class GotodashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

}

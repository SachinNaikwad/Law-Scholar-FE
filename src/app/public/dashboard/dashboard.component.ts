import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}

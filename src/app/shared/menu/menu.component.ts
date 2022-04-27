import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  constructor(private rr: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('band')) {
      //sessionStorage.setItem()
      if (localStorage.getItem('user')) {
        console.log('activate');
        this.rr.navigate(['/auth/dashboard']);
        sessionStorage.setItem('band', 'true');
      }
    }
  }
}

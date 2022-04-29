import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(private rr: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem("band")) {
      //sessionStorage.setItem()
      if (localStorage.getItem("user")) {
        console.log("activate");
        this.rr.navigate(["/auth/dashboard"]);
        sessionStorage.setItem("band", "true");
      }
    }
  }

  navegar(band: boolean) {
    if (band) this.rr.navigate(["/auth/registro"]);
    else this.rr.navigate(["/auth/login"]);
  }
}
//background: rgb(85, 144, 189);
//background: linear-gradient(
//  90deg,
//  rgba(85, 144, 189, 1) 0%,
//  rgba(108, 183, 240, 1) 54%,
//  rgba(182, 216, 242, 1) 82%
//);

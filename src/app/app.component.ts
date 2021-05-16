import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DayOfWeek} from "./models/dayOfWeek";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Klanten';

  navbarOpen = false;
  sidebarOpen = false;


  constructor() { }

  ngOnInit() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

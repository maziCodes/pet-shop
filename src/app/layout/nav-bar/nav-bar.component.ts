import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private _sidebarOpen: boolean;
  private _navbarOpen: boolean;
  private _title: string;

  @Input() set sidebarOpen(value: boolean) {
    this._sidebarOpen = value;
  }
  get sidebarOpen() {
    return this._sidebarOpen;
  }

  @Input() set navbarOpen(value: boolean) {
    this._navbarOpen = value;
  }
  get navbarOpen() {
    return this._navbarOpen;
  }

  @Input() set title(value: string) {
    this._title = value;
  }
  get title() {
    return this._title;
  }

  @Output() emitToggleSideBar: EventEmitter<any> = new EventEmitter<any>()
  @Output() emitToggleNavBar: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.emitToggleSideBar.next();
  }

  toggleNavbar() {
    this.emitToggleNavBar.next();
  }
}

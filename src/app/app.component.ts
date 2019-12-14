import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHideSideBar = false;

  onShowSideBarChanged(showHideSideBar) {
    this.showHideSideBar = !this.showHideSideBar;
  }
}

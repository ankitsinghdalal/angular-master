import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'test-admin';
  isSlidebarCollasped: boolean = false;
  isChatSlidebarCollasped: boolean = false;

  constructor() { }

  onSidebarToggle() {
    this.isSlidebarCollasped=!this.isSlidebarCollasped;
  }

  onChatSidebarToggle() {
    this.isChatSlidebarCollasped=!this.isChatSlidebarCollasped;
  }

}

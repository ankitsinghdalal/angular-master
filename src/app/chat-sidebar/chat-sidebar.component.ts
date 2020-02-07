import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.css']
})
export class ChatSidebarComponent implements OnInit {

  @Input('isChatSlidebarCollasped') isChatSlidebarCollasped: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isChatSlidebarCollasped=!this.isChatSlidebarCollasped;
  }

}

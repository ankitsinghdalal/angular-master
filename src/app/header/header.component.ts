import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('isSlidebarCollasped') isSlidebarCollasped: boolean;
  @Input('isChatSlidebarCollasped') isChatSlidebarCollasped: boolean;

  @Output('changeSidebarCollasped') changeSidebarCollasped = new EventEmitter();
  @Output('changeChatSidebarCollasped') changeChatSidebarCollasped = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSlidebarCollasped=!this.isSlidebarCollasped;
    this.changeSidebarCollasped.emit();
  }

  toggleChatSidebar() {
    this.changeChatSidebarCollasped.emit();
  }

}

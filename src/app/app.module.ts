import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialPreloaderComponent } from './material-preloader/material-preloader.component';
import { LoaderBgComponent } from './loader-bg/loader-bg.component';
import { LoaderComponent } from './loader/loader.component';
import { SidebarHoverComponent } from './sidebar-hover/sidebar-hover.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchResultsComponent,
    ChatSidebarComponent,
    ChatMessagesComponent,
    SidebarComponent,
    MaterialPreloaderComponent,
    LoaderBgComponent,
    LoaderComponent,
    SidebarHoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

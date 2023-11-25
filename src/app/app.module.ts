import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueSearcherComponent } from './issue-searcher/issue-searcher.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IssueSearcherComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

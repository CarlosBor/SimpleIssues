import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { appReducer } from './ngrx/app.reducer';
import { IssueSearcherComponent } from './issue-searcher/issue-searcher.component';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './ngrx/app.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IssueSearcherComponent,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([ApiEffects]), // Include ApiEffects here
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

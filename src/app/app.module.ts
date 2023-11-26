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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IssueSearcherComponent,
    StoreModule.forRoot({appReducer}),
    EffectsModule.forRoot([ApiEffects]),
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ serialize: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

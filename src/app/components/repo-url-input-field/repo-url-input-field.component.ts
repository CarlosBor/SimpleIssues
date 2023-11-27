import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppState } from '../../ngrx/app.reducer';
import * as AppActions from '../../ngrx/app.actions';

@Component({
  selector: 'app-repo-url-input-field',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './repo-url-input-field.component.html',
  styleUrl: './repo-url-input-field.component.css'
})

export class RepoUrlInputFieldComponent {
  apiUrl:string = "";

  constructor(private store: Store<{app:AppState}>) {}

  onSubmit() {
    this.store.dispatch(AppActions.setUrl({ url: this.apiUrl }));
    this.store.dispatch(AppActions.fetchApiData({ url: this.apiUrl }));
  }
}

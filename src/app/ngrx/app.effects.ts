// api.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

// Import necessary services for HTTP requests

import * as ApiActions from './app.actions';
import { AppState } from './app.reducer';

@Injectable()

export class ApiEffects {//Honest to God I don't understand how this call is made
    fetchApiData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ApiActions.fetchApiData),
        mergeMap((action) => {
          const apiUrl = action.url; // Assuming the URL is passed in the action payload
          // Perform the HTTP request using the apiUrl
          return this.http.get(apiUrl).pipe(
            map((responseData: any) => {
                console.log(responseData);
              return ApiActions.setApiResponse({ responseData });
            }),
            // catchError(() => of(/* action for error */))
          );
        })
      )
    );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>, // Assuming AppState is where you have all your reducers combined
    private http: HttpClient // Import HttpClient for making HTTP requests
  ) {}
}

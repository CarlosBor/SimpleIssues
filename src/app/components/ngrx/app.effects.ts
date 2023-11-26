// api.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CardInfo } from '../../interface/cardInfo';
import parseLinkText from '../../util/parseLinkText';
import { PaginationElement } from '../../interface/pagination-element';

// Import necessary services for HTTP requests

import * as ApiActions from './app.actions';

@Injectable()
export class ApiEffects {//Honest to God I don't understand how this call is made
    fetchApiData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ApiActions.fetchApiData),
        mergeMap((action) => {
          const apiUrl = action.url;
          return this.http.get(apiUrl, { observe: 'response' }).pipe(
            mergeMap((response:HttpResponse<any>) =>{
                const linkHeader = response.headers.get('Link');
                const responseData = response.body as CardInfo[];
                if(linkHeader){
                    const parsedLinkHeaders:PaginationElement = parseLinkText(linkHeader);
                    return[
                        ApiActions.setApiResponse({cardInfoList:responseData}),
                        ApiActions.setLinkHeaders({pagination:parsedLinkHeaders}),
                    ];
                }
                return[ApiActions.setApiResponse({cardInfoList:responseData})];
            })
          );
        })
      )
    );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}

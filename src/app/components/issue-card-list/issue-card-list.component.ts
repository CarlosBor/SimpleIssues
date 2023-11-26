import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfo } from '../../interface/cardInfo';
import { PaginationElement } from '../../interface/pagination-element';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/app.reducer';
import { Observable } from 'rxjs';
import { selectCardInfoList, selectPagination, selectUrl } from '../ngrx/app.selectors';
import * as AppActions from '../ngrx/app.actions';
import { first } from 'rxjs';

@Component({
  selector: 'app-issue-card-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './issue-card-list.component.html',
  styleUrl: './issue-card-list.component.css'
})

export class IssueCardListComponent implements OnInit {
  cardInfoList$ = new Observable<CardInfo[] | undefined | any>();
  pagination$ = new Observable<PaginationElement | undefined>();
  url$ = new Observable<string>();

  constructor(private store: Store<AppState>) {
    this.cardInfoList$ = this.store.select(selectCardInfoList);
    this.pagination$ = this.store.select(selectPagination);
    this.url$ = this.store.select(selectUrl);
  }

  ngOnInit(): void {
    this.cardInfoList$.subscribe();
    this.pagination$.subscribe();
  }

  goFirst() {
    this.pagination$.pipe(first()).subscribe(pagination => {
      if (pagination && pagination.first) {
        this.store.dispatch(AppActions.setUrl({ url: pagination.first }));
        this.store.dispatch(AppActions.fetchApiData({ url: pagination.first }));
      }
    });
  }
  goPrev() {
    this.pagination$.pipe(first()).subscribe(pagination => {
      if (pagination && pagination.prev) {
        this.store.dispatch(AppActions.setUrl({ url: pagination.prev }));
        this.store.dispatch(AppActions.fetchApiData({ url: pagination.prev }));
      }
    });
  }
  goNext() {
    this.pagination$.pipe(first()).subscribe(pagination => {
      if (pagination && pagination.next) {
        this.store.dispatch(AppActions.setUrl({ url: pagination.next }));
        this.store.dispatch(AppActions.fetchApiData({ url: pagination.next }));
      }
    });
  }
  goLast() {
    this.pagination$.pipe(first()).subscribe(pagination => {
      if (pagination && pagination.last) {
        this.store.dispatch(AppActions.setUrl({ url: pagination.last }));
        this.store.dispatch(AppActions.fetchApiData({ url: pagination.last }));
      }
    });
  }
}

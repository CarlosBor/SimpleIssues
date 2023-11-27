import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../ngrx/app.reducer';

const selectFeature = (state: AppState) => state;

export const selectCardInfoList = createSelector(
  selectFeature,
  (state: any) => {
    return state.appReducer.cardInfoList;
  }
);

export const selectPagination = createSelector(
  selectFeature,
  (state: any) => {
    return state.appReducer.pagination;
  }
);

export const selectUrl = createSelector(
    selectFeature,
    (state: any) => {
      return state.appReducer.url;
    }
  );
  
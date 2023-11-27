import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../ngrx/app.reducer';

const selectFeature = (state: AppState) => state;

//Soy consciente de que los state:any aqui son una locura.
//Creo que el problema viene de como establezco la raiz en app.module
//Haciendolo bien deberia de poder establecerlos como AppState y funcionar normal

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
  
import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

const selectFeature = (state: AppState) => state;

//Se que los 'state: any' aqui son una locura.
//Si no me equivoco, debería de poder acceder al estado con state.cardInfoList en lugar de tener que referirme primero a appReducer.
//Creo que el problema esta en como establezco la raiz en app.module, con eso resuelto deberia de poder establecer state como AppState, como debería ser
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
  
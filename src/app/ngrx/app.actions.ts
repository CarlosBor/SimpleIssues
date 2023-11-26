import { createAction, props } from '@ngrx/store';


export const setUrl = createAction('[InputUrl Component] Set Url', props<{url: string}>());
export const fetchApiData = createAction('[API] Fetch Api Data', props<{url: string}>());
export const setApiResponse = createAction('[API] Set API Response',props<{ responseData: any }>());
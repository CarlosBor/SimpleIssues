import { createAction, props } from '@ngrx/store';
import { CardInfo } from '../cardInfo';
import { PaginationElement } from '../pagination-element';

export const setUrl = createAction('[InputUrl Component] Set Url', props<{url: string}>());
export const fetchApiData = createAction('[API] Fetch Api Data', props<{url: string}>());
export const setApiResponse = createAction('[API] Set Api Response',props<{ cardInfoList: CardInfo[] | any }>());
export const setLinkHeaders = createAction('[API] Set Api Header Links', props<{  pagination : PaginationElement | undefined;}>())
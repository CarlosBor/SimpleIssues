import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { IssueSearcherComponent } from './issue-searcher.component';
import {provideMockStore} from '@ngrx/store/testing'

describe('IssueSearcherComponent', () => {
  const initialState = {
    url:"test Url",
    cardInfoList:{
      id: 1,
      title: "string",
      url: "string",
      state: "string",
      created_at: "string",
      user: {
          login: "string"
      },
      body: "string",
    },
    pagination :{
      prev:"prevLink",
      next:"nextlink",
      first:"firstLink",
      last:"lastLink"
    }
  };

  let component: IssueSearcherComponent;
  let fixture: ComponentFixture<IssueSearcherComponent>;
  let storeMock:jasmine.SpyObj<Store>

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      imports: [IssueSearcherComponent],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
    
    storeMock = TestBed.inject(Store) as jasmine.SpyObj<Store>; // Inject the mock Store

    fixture = TestBed.createComponent(IssueSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

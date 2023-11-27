import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardListComponent } from './issue-card-list.component';
import {provideMockStore, MockStore} from '@ngrx/store/testing'

describe('IssueCardListComponent', () => {
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

  let component: IssueCardListComponent;
  let fixture: ComponentFixture<IssueCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueCardListComponent],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssueCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

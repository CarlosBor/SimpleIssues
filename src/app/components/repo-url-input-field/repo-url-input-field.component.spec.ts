import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoUrlInputFieldComponent } from './repo-url-input-field.component';

import {provideMockStore} from '@ngrx/store/testing'

describe('RepoUrlInputFieldComponent', () => {
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

  let component: RepoUrlInputFieldComponent;
  let fixture: ComponentFixture<RepoUrlInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoUrlInputFieldComponent],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepoUrlInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

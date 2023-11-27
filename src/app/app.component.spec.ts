import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { IssueSearcherComponent } from './components/issue-searcher/issue-searcher.component';
import {provideMockStore} from '@ngrx/store/testing'

describe('AppComponent', () => {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        IssueSearcherComponent
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({initialState})
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'IrontecPrueba'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('IrontecPrueba');
  });
});

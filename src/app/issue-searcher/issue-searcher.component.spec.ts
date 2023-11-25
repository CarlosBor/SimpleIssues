import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueSearcherComponent } from './issue-searcher.component';

describe('IssueSearcherComponent', () => {
  let component: IssueSearcherComponent;
  let fixture: ComponentFixture<IssueSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueSearcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssueSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

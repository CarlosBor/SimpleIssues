import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardListComponent } from './issue-card-list.component';

describe('IssueCardListComponent', () => {
  let component: IssueCardListComponent;
  let fixture: ComponentFixture<IssueCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueCardListComponent]
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

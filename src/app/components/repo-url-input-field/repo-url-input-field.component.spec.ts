import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoUrlInputFieldComponent } from './repo-url-input-field.component';

describe('RepoUrlInputFieldComponent', () => {
  let component: RepoUrlInputFieldComponent;
  let fixture: ComponentFixture<RepoUrlInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoUrlInputFieldComponent]
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

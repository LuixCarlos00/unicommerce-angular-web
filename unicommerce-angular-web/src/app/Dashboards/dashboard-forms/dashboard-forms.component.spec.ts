import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFormsComponent } from './dashboard-forms.component';

describe('DashboardFormsComponent', () => {
  let component: DashboardFormsComponent;
  let fixture: ComponentFixture<DashboardFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFormsComponent]
    });
    fixture = TestBed.createComponent(DashboardFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

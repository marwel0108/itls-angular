import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotodashboardComponent } from './gotodashboard.component';

describe('GotodashboardComponent', () => {
  let component: GotodashboardComponent;
  let fixture: ComponentFixture<GotodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotodashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GotodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesOverviewTableComponent } from './routes-overview-table.component';

describe('RoutesOverviewTableComponent', () => {
  let component: RoutesOverviewTableComponent;
  let fixture: ComponentFixture<RoutesOverviewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesOverviewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesOverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

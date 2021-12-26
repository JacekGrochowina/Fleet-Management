import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoutePageComponent } from './add-route-page.component';

describe('AddRoutePageComponent', () => {
  let component: AddRoutePageComponent;
  let fixture: ComponentFixture<AddRoutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRoutePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRouteComponent } from './add-edit-route.component';

describe('AddEditRouteComponent', () => {
  let component: AddEditRouteComponent;
  let fixture: ComponentFixture<AddEditRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

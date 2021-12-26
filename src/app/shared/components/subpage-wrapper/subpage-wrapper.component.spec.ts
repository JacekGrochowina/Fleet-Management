import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageWrapperComponent } from './subpage-wrapper.component';

describe('SubpageWrapperComponent', () => {
  let component: SubpageWrapperComponent;
  let fixture: ComponentFixture<SubpageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpageWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

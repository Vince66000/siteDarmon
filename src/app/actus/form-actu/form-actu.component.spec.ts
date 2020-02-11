import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActuComponent } from './form-actu.component';

describe('FormActuComponent', () => {
  let component: FormActuComponent;
  let fixture: ComponentFixture<FormActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

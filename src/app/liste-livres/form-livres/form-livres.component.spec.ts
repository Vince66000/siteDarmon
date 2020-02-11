import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLivresComponent } from './form-livres.component';

describe('FormLivresComponent', () => {
  let component: FormLivresComponent;
  let fixture: ComponentFixture<FormLivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

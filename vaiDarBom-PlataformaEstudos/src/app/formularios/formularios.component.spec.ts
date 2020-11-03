import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosComponent } from './formularios.component';

describe('FormulariosComponent', () => {
  let component: FormulariosComponent;
  let fixture: ComponentFixture<FormulariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLimitegastosComponent } from './form-limitegastos.component';

describe('FormLimitegastosComponent', () => {
  let component: FormLimitegastosComponent;
  let fixture: ComponentFixture<FormLimitegastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLimitegastosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLimitegastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlertapagamentoComponent } from './form-alertapagamento.component';

describe('FormAlertapagamentoComponent', () => {
  let component: FormAlertapagamentoComponent;
  let fixture: ComponentFixture<FormAlertapagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAlertapagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlertapagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

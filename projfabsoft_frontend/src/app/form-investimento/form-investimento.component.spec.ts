import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInvestimentoComponent } from './form-investimento.component';

describe('FormInvestimentoComponent', () => {
  let component: FormInvestimentoComponent;
  let fixture: ComponentFixture<FormInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInvestimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

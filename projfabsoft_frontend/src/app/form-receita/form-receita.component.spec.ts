import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReceitaComponent } from './form-receita.component';

describe('FormReceitaComponent', () => {
  let component: FormReceitaComponent;
  let fixture: ComponentFixture<FormReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReceitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

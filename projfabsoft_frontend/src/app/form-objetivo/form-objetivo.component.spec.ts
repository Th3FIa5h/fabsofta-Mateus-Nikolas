import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObjetivoComponent } from './form-objetivo.component';

describe('FormObjetivoComponent', () => {
  let component: FormObjetivoComponent;
  let fixture: ComponentFixture<FormObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormObjetivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutboxComponent } from './checkoutbox.component';

describe('CheckoutComponent', () => {
  let component: CheckoutboxComponent;
  let fixture: ComponentFixture<CheckoutboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

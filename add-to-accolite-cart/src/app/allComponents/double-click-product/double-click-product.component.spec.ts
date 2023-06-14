import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleClickProductComponent } from './double-click-product.component';

describe('DoubleClickProductComponent', () => {
  let component: DoubleClickProductComponent;
  let fixture: ComponentFixture<DoubleClickProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleClickProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleClickProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAmountComponent } from './product-amount.component';

describe('ProductAmountComponent', () => {
  let component: ProductAmountComponent;
  let fixture: ComponentFixture<ProductAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAmountComponent]
    });
    fixture = TestBed.createComponent(ProductAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

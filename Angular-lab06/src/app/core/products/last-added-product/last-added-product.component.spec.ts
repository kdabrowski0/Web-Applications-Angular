import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddedProductComponent } from './last-added-product.component';

describe('LastAddedProductComponent', () => {
  let component: LastAddedProductComponent;
  let fixture: ComponentFixture<LastAddedProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastAddedProductComponent]
    });
    fixture = TestBed.createComponent(LastAddedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

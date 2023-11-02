import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponentComponent } from './add-product-component.component';

describe('AddProductComponentComponent', () => {
  let component: AddProductComponentComponent;
  let fixture: ComponentFixture<AddProductComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponentComponent]
    });
    fixture = TestBed.createComponent(AddProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

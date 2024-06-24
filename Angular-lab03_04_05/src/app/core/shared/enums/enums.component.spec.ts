import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumsComponent } from './enums.component';

describe('EnumsComponent', () => {
  let component: EnumsComponent;
  let fixture: ComponentFixture<EnumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnumsComponent]
    });
    fixture = TestBed.createComponent(EnumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

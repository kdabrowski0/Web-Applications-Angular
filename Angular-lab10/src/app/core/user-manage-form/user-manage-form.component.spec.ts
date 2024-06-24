import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageFormComponent } from './user-manage-form.component';

describe('UserManageFormComponent', () => {
  let component: UserManageFormComponent;
  let fixture: ComponentFixture<UserManageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManageFormComponent]
    });
    fixture = TestBed.createComponent(UserManageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

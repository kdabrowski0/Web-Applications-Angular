import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponentComponent } from './todo-form-component.component';

describe('TodoFormComponentComponent', () => {
  let component: TodoFormComponentComponent;
  let fixture: ComponentFixture<TodoFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponentComponent]
    });
    fixture = TestBed.createComponent(TodoFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

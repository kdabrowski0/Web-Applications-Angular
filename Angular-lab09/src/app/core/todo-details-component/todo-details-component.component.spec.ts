import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsComponentComponent } from './todo-details-component.component';

describe('TodoDetailsComponentComponent', () => {
  let component: TodoDetailsComponentComponent;
  let fixture: ComponentFixture<TodoDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(TodoDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

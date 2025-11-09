import { Component, input } from '@angular/core';
import { Todos } from '../../todos/todos';
import { TodoModel } from '../../models/todos.type';

@Component({
  selector: 'app-todo-items',
  imports: [],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss',
})
export class TodoItems {
  todo = input.required<TodoModel>();
}

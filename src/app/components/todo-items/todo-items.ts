import { Component, input, output } from '@angular/core';
import { Todos } from '../../todos/todos';
import { TodoModel } from '../../models/todos.type';
import { HighlightCompleteTodo } from '../../directives/highlight-complete-todo';

@Component({
  selector: 'app-todo-items',
  imports: [HighlightCompleteTodo],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss',
})
export class TodoItems {
  todo = input.required<TodoModel>();

  toggleTodo = output<TodoModel>();

  toggleClicked()
  {
    this.toggleTodo.emit(this.todo());
  }
}

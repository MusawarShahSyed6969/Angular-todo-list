import { Component, inject, OnInit, signal } from '@angular/core';
import { todoService } from '../services/todo';
import { TodoModel } from '../models/todos.type';
import { catchError } from 'rxjs';
import { TodoItems } from '../components/todo-items/todo-items';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../pipes/filter-pipe-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItems,FormsModule,FilterPipePipe],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss'],
})
export class Todos implements OnInit {
todoService = inject(todoService)
todoItems =  signal<Array<TodoModel>>([])

searchTerm = signal("");


ngOnInit(): void {
    this.todoService.getTodosfromapi().
    pipe( catchError((err) =>{
      console.log(err);
      throw err;
    })).subscribe((todos) => {
      this.todoItems.set(todos)
    })    
}

updateTodoItem(todoItem: TodoModel): void
{
  this.todoItems.update((todos) => {
    return todos.map((todo) => {
      if (todo.id == todoItem.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
  });
}

}

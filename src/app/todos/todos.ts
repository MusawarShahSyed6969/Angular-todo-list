import { Component, inject, OnInit, signal } from '@angular/core';
import { todoService } from '../services/todo';
import { TodoModel } from '../models/todos.type';
import { catchError } from 'rxjs';
import { TodoItems } from '../components/todo-items/todo-items';

@Component({
  selector: 'app-todos',
  imports: [TodoItems],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
todoService = inject(todoService)
todoItems =  signal<Array<TodoModel>>([])

ngOnInit(): void {
    this.todoService.getTodosfromapi().
    pipe( catchError((err) =>{
      console.log(err);
      throw err;
    })).subscribe((todos) => {
      this.todoItems.set(todos)
    })
    
}
}

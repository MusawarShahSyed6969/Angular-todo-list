import { inject, Injectable } from '@angular/core';
import {TodoModel} from "../models/todos.type"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class todoService {
  http = inject(HttpClient)



  getTodosfromapi()
  {
    const url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get<TodoModel[]>(url)
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../models/todos.type';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: TodoModel[], searchTerm : string): TodoModel[] {
    if(!searchTerm) return todos;

    const  text = searchTerm.toLowerCase() 
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchTerm);
    });
  }

}

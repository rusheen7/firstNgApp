import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { TodoService, TodoItem } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Include CommonModule here
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodoItems().subscribe(
      data => this.todoItems = data,
      error => console.error('There was an error loading to-dos!', error)
    );
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodoItem(id).subscribe(() => {
      this.loadTodos();
}
    )
}
}

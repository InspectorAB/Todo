import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { TodoService, TodoItem } from '../todo.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule], // Include CommonModule here
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems: TodoItem[] = [];
  newTodoTitle: string = '';
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
  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo = { name: this.newTodoTitle, isComplete: false };

      this.todoService.addTodoItem(newTodo).subscribe(
        (addedTodo) => {
          this.todoItems.push(addedTodo);  // Add the new todo to the list
          this.newTodoTitle = '';  // Clear the input field
        },
        (error) => {
          console.error('Error adding todo!', error);
        }
      );
    }
}
toggleTodoStatus(todo: TodoItem): void {
  todo.isComplete = !todo.isComplete;
  this.todoService.updateTodoItem(todo).subscribe(
    (updatedTodo) => {
      // Successfully updated the todo item
    },
    (error) => {
      console.error('Error updating todo!', error);
    }
  );
}
}



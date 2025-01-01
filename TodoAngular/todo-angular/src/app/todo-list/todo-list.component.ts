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
  editingTodo: TodoItem | null = null;
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

  deleteTodo(todo: TodoItem): void {
    if (todo && todo.id !== undefined) {
      this.todoService.deleteTodoItem(todo.id).subscribe(
        () => {
          this.todoItems = this.todoItems.filter((t) => t.id !== todo.id);
        },
        (error) => console.error('Error deleting todo', error)
      );
    } else {
      console.error('Todo item or its ID is undefined');
    }
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
editTodo(todo: TodoItem): void {
  console.log("Editing");
  this.editingTodo = { ...todo };
}

updateTodo(): void {
  console.log('Updating todo:', this.editingTodo);
  if (this.editingTodo) {
    this.todoService.updateTodoItem(this.editingTodo).subscribe(
      (updatedTodo) => {
        console.log('Updated todo:', updatedTodo);
        const index = this.todoItems.findIndex((t) => t.id === updatedTodo.id);
        if (index !== -1) {
          this.todoItems[index] = updatedTodo;
        }
        this.editingTodo = null;
      },
      (error) => console.error('Error updating todo', error)
    );
  }
}

cancelEdit(): void {
  console.log("Cancel edit");
  this.editingTodo = null;
}

}



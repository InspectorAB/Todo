import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the TodoItem interface
export interface TodoItem {
  id: number;
  name: string;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://localhost:7121/api/todoitems';  // Adjust the URL to match your backend

  constructor(private http: HttpClient) { }

  // Get all todo items
  getTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  // Get a single todo item by ID
  getTodoItem(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(`${this.apiUrl}/${id}`);
  }

  // Add a new todo item
  addTodoItem(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, todo);
  }

  // Update an existing todo item
  updateTodoItem(todo: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.apiUrl}/${todo.id}`, todo);
  }

  // Delete a todo item
  deleteTodoItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

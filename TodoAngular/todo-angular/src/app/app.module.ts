import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    TodoListComponent
  ],
  providers: [TodoService,HttpClientModule],
})
export class AppModule { }

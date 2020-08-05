import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListModule } from './todo-list/todo-list.module';
import { HelloModule } from './hello/hello.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodoListModule,
    HelloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

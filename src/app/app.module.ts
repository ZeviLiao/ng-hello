import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { FormsModule } from '@angular/forms';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

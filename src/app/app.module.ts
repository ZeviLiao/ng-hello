import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { FormsModule } from '@angular/forms';
import { TodoListModule } from './todo-list/todo-list.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageBoardComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [

  BrowserModule,
    FormsModule,
    TodoListModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

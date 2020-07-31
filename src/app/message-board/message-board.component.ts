import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {

  constructor() { }
  name = '';
  content = '';
  messages: Message[] = [];

  ngOnInit(): void {
  }

  addMessage(): void {
    if (!this.name.trim() || !this.content.trim()) { return; }
    const message = new Message(this.name, this.content);
    this.messages.push(message);
    this.content = '';
  }
}

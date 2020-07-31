import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {

  constructor() {}
  title = 'zevi';

  courses = ['1', '2', '3'];

  ngOnInit(): void {}

  getTitle() {
    return 'hello, zevi!';
  }
}

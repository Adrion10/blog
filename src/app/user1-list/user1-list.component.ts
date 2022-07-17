import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1-list',
  templateUrl: './user1-list.component.html',
  styles: [
    `
      .costem {
        color: red;
      }
    `,
  ],
})
export class User1ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

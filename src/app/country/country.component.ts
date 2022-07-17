import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: ` <h2 class="costem">country works!</h2> `,
  styles: [
    `
      .costem {
        color: green;
      }
    `,
  ],
})
export class CountryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

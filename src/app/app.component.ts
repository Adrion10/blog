import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = '14';
  data = 'Hello Code';
  getVal() {
    return 'learn Angular';
  }
  num = 100;
  getName(name: string | number) {
    alert(name);
  }
  title = 'importent event in Angular';
  getData() {
    console.warn('hello world');
  }
}

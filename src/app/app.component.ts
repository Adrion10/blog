import { Component } from '@angular/core';
import { timestamp } from 'rxjs';
import { NgForm } from '@angular/forms';

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
  // getData(val: string) {
  //   console.warn(val);
  // }
  // title1 = 'get Imput value';
  // displayVal = 'string';

  // getValue(val: string) {
  //   console.warn(val);
  //   this.displayVal = val;
  // }
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  name = 'Lace';
  title6 = 'if else condition';
  // show = true;
  show = 'yes';
  title7 = 'if multi condition';
  // color = 'red';
  title8 = 'Multipele condition or else if';
  // color = 'blue';
  title9 = 'Switch Case';
  // color = 'blue';
  title10 = 'For loop';
  users = ['LAce', 'Noel', 'Marisola', 'Rovnea'];
  userDetails = [
    { name: 'Lace', email: 'lace@gmail.com', phone: '0123456' },
    { name: 'Noel', email: 'noel@gmail.com', phone: '012348999' },
    { name: 'Marisol', email: 'marisola@gmail.com', phone: '01236' },
  ];
  title11 = 'Nested Loop';
  users1 = [
    {
      name: 'Lace',
      email: 'lace@gmail.com',
      phone: '0123456',
      accounts: ['facebook', 'tic-tok', 'instagram'],
    },
    {
      name: 'Noel',
      email: 'noel@gmail.com',
      phone: '012348999',
      accounts: ['youtube', 'tic-tok', 'instagram'],
    },
    {
      name: 'Marisol',
      email: 'marisola@gmail.com',
      phone: '01236',
      accounts: ['facebook', 'Gmail', 'instagram'],
    },
  ];
  title12 = 'Style Binding';
  color = 'red';
  bgColor = 'green';
  updateColor() {
    this.color = 'red';
    this.bgColor = 'blue';
  }
  title13 = 'Basic Form';
  userData: any = {};
  getData(data: NgForm) {
    console.warn(data);
  }
}

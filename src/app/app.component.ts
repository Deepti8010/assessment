import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  income:number;
  expense:number;
  title = 'We make it Super Simple';
  title_two = "Boost your business with Open"
  incomeChanged(e) {
    this.income = e;
  }
  expenseChanged(e) {
    this.expense = e;
  }
  constructor(){
    this.income = 0;
    this.expense = 0;
  }
}

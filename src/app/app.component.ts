import { Component, OnInit } from '@angular/core';
import {Item} from "./Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'day2';
  items: Item[] = [];
  item!: Item;

  ngOnInit(): void {

  }
  addedItem(name: string) {
    console.log(name)
    if (this.items.length === 0) {
      let item = new Item();
      item.name = name;
      item.quantity = 1;
      this.items.push(item);
    } else if (this.items.length < 4) {
        if (this.items.some(item => item.name === name))
        this.items[this.items.indexOf(this.items.filter(item => item.name === name)[0])].quantity ++;
        else{
          let item = new Item();
          item.name = name;
          item.quantity = 1;
          this.items.push(item);
        }
        } else{
      for (let item of this.items) {
        if (item.name === name) {
          item.quantity++;
          console.log(item.quantity)
        }
      }
    }
    console.log(this.items)
  }
}


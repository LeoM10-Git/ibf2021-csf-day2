import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../Item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() name!: string;
  @Input() qty!: number;
  @Input() cartItems!: Item[];

  constructor() { }

  ngOnInit(): void {
  }

  remove(name: string){
    for (let item of this.cartItems) {
      if (item.name === name && item.quantity > 0) {
        item.quantity--;
      }
    }
  }
}

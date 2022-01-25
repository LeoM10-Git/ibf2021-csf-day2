import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Output() onClick = new EventEmitter<string>();
  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(name: string){
    this.onClick.emit(name);
  }
}

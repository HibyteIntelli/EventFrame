import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-card-list',
  templateUrl: './detailed-card-list.component.html',
  styleUrls: ['./detailed-card-list.component.css']
})
export class DetailedCardListComponent implements OnInit {

  elements: string[];

  constructor() { }

  ngOnInit(): void {
    this.elements = ['one', 'two', 'three', 'four'];
  }

}

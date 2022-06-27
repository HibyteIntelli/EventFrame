import {Component, OnInit} from '@angular/core';
import {Event} from "../../data/event";

@Component({
  selector: 'app-cards-example',
  templateUrl: './cards-example.component.html',
  styleUrls: ['./cards-example.component.css']
})
export class CardsExampleComponent implements OnInit {

  event: Event;

  constructor() {
  }

  ngOnInit(): void {
  }
}

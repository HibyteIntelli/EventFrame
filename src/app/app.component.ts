import {Component} from '@angular/core';
import {AuthorizationService} from "./services/authorization/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventFrame';

  constructor(private authorizationService: AuthorizationService) {
  }
}

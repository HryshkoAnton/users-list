import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Users List';
  usersList: string[] = ['Rick', 'Jack', 'Matt', 'Lucy', 'Derrick'];
}

import { Component } from "@angular/core";

@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html',
  styles: [`
  p { color: blue;}
  `]
})
export class UserComponent {
  username: string = '';

  resetUsername() {
    this.username = '';
  }
}

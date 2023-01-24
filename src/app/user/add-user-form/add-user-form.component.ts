import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  @Output() userCreated = new EventEmitter<User>();
  firstName!: string;
  lastName!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    this.userCreated.emit(new User(this.firstName, this.lastName));
  }

}

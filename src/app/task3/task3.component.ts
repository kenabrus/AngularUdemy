import { Component } from "@angular/core";

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  // styleUrls: ['./task3.component.html']
  styles: [`
  .white-text {
  color: white;
}
  `]
})
export class Task3 {
  secretPassword = 'tuna';

  passwordsArray: string[] = [];

  displayDetails() {
    this.passwordsArray.push('tuna');
    console.log('passwordsArray.length ' + this.getPasswordArrayLength());
  }

  getPasswordArrayLength() {
    return this.passwordsArray.length;
  }
}

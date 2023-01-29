import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Server } from 'src/app/shared/server.model';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent {

  @Output() serverCreated = new EventEmitter<Server>;
  // serverName!: string;
  // serverContent!: string;
  @ViewChild('serverContentInput') serverContentInput: ElementRef | undefined;

  addServer(serverNameInput: HTMLInputElement){
    // this.servers.push(new Server(this.serverName, this.serverContent))
    console.log(this.serverContentInput);
    this.serverCreated.emit(new Server(serverNameInput.value, this.serverContentInput?.nativeElement.value, 'server'));
  }

  addBlueprintServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(new Server(serverNameInput.value, this.serverContentInput?.nativeElement.value, 'blueprint'));
  }

}

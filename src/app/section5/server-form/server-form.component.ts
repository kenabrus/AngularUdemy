import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from 'src/app/shared/server.model';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent {

  @Output() serverCreated = new EventEmitter<Server>;
  serverName!: string;
  serverContent!: string;

  addServer(){
    // this.servers.push(new Server(this.serverName, this.serverContent))
    this.serverCreated.emit(new Server(this.serverName, this.serverContent));
  }

}

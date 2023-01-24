import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server.model';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  serverElements: Server[] = [new Server('Server 1', 'Opis 1')];

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData: Server) {
    // this.serverElements.push(new Server(serverData.serverName, serverData.serverContent));
    this.serverElements.push(serverData);
  }

}

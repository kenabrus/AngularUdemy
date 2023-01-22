import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <h1>hollo </h1>
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "";
  serverName = "";
  serverStatus: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverCreationStatus = Math.random() > 0.5 ? "online" : "offline";

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    console.log("onCreateServer() clicked");
    this.serverCreationStatus = "Server was created";
    this.serverStatus = true;
  }

  onUpdateServerName(event: any) {
    console.log("onUpdateServerName() clicked" + event);
    this.serverName = event.target.value;
    console.log("onUpdateServerName() clicked: " + this.serverName);
  }

}

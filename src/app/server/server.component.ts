import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
    serverId = 10;
    private serverStatus: string = '';

    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
    // this.serverCreationStatus = Math.random() > 0.5 ? "online" : "offline";

    constructor() {
      setTimeout(() => {

      }, 2000);
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus(): string {
      return this.serverStatus;
    }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
}

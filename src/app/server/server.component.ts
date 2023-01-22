import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {
    serverId = 10;
    private serverStatus: string = 'offline';

    getServerStatus(): string {
      return this.serverStatus;
    }
}

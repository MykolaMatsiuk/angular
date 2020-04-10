import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testserver';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => this.setAllowNewServer(), 2000);
  }

  private setAllowNewServer() {
    this.allowNewServer = true;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(e: Event) {
    this.serverName = (e.target  as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}

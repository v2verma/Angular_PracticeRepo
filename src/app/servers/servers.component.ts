import { Component, OnInit } from '@angular/core';

let i = 1;

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = '';
  // displayText = 'Yeah, I am visible!';
  toggle = false;
  btnClick = [];
  toggleBackground = '';
  servers = [ 'TestServer1' , 'TestServer2' ];
  serverCreationStatus = 'Server has not been created yet!';
  constructor() { setTimeout( () => {
      this.allowNewServer = true;
    }, 3000);
    console.log(this.toggle);
  }

  ngOnInit() {
  }

  onCreateServer = () => {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'A new Server has been created! Name : ' + this.serverName;
    // this.serverName = '';
  }
  toggleDisplay = () => {
    console.log(i);
    this.btnClick.push(i);
    this.toggle = !this.toggle;
    i++;
  }

  getColorNumber () {
    if (i > 5) {
      return this.toggleBackground = 'blue';
    } else {
      return this.toggleBackground = '';
    }
  }
}

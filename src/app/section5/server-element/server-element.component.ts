import { Component, Input, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input( ) element!: Server;

  constructor() { }

  ngOnInit(): void {
  }

}

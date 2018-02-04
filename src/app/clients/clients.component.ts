import { Component, OnInit } from '@angular/core';
import { CLIENTS } from '../shared/mock-data/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = CLIENTS;

  constructor() { }

  ngOnInit() {
  }

}

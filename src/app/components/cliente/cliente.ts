import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente-services';

@Component({
  selector: 'app-cliente',
  imports: [],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {
  
  constructor(private service:ClienteService,
  ){}


  getClientes(){
    this.service.getClientes();


  }

}

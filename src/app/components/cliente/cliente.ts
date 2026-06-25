import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente-services';
import { Calculadora } from '../../model/calculadora';

@Component({
  selector: 'app-cliente',
  imports: [],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {
  
  constructor(private service:ClienteService, 
    private calculadora:Calculadora
  ){}


  getClientes(){
    this.service.getClientes();

  }


  somar(n1: number, n2: number){
    this.calculadora.somar(n1,n2);
  }

}

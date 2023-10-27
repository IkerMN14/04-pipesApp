import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {
  
  observable = interval(1000);
  
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  clientes: string[] = ['Maria','Iker','Paco']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  cambiarPersona(){
    this.nombre='Ana';
    this.genero='femenino'
  }
  borrarCliente(){
    this.clientes.pop();
  }
  persona ={
    nombre: 'Fernando',
    edad: 35,
    direccion:'Ottawa, Canada'
  }
  
}

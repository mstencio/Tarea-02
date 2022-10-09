import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  // aqui va el codigo
  edad=0
  incrementarEdad(){
    this.edad += 1
  }

  reducirEdad(){
    this.edad -= 1
  }
 
  cursos:Array<string>=["Angular", "Bootstrap", "HTML, CSS", "Javascript"]


  constructor() { }

  ngOnInit(): void {
  }

}

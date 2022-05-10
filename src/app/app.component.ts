import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'miPrimeraApp';
  public ArregloTargetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTargetas = [
      {titulo:'Video 1', subtitulo: 'Subtitulo 1', nro: 1},
      {titulo:'Video 2', subtitulo: 'Subtitulo 2'},
      {titulo:'Video 3', subtitulo: 'Subtitulo 3'}
    ]  } 

}

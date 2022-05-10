import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
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
      {titulo:'Video 1', subtitulo: 'Subtitulo 1', image:"https://1000marcas.net/wp-content/uploads/2021/10/Bad-Bunny-Logo.png"},
      {titulo:'Video 2', subtitulo: 'Subtitulo 2',image:"https://ca-times.brightspotcdn.com/dims4/default/cb4ea65/2147483647/strip/true/crop/3094x1940+0+0/resize/1486x932!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F32%2F2e%2F1b80271c4869bd2d3898e02c66f6%2Fnicky.jpg"},
      {titulo:'Video 3', subtitulo: 'Subtitulo 3',image:"https://www.radiopop.cl/wp-content/uploads/2018/07/50-cent-2.png"}
    ]  } 

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://i.pinimg.com/originals/5d/e4/76/5de4768061c7c1230bdcfb5df181b6e0.jpg"
  public Titulo:string = "Curso de Angular con interpolacion"
  @Input() dataEntrante:any;

  constructor() { }

  ngOnInit(): void {
  }

}

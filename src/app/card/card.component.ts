import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  tasks = [
    {
      tittle: 'Comida perro',
      description: 'Recuerda comprar la comida del perro'
    },
    {
      tittle: 'Sacar Basura',
      description: 'Recuerda sacar la basura a las 8:00 pm'
    }
  ]
}

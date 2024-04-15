import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonSelect, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonSelect]
})

export class CirculoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}



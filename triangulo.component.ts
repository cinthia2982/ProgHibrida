import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonSelect } from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [ IonList, IonItem, IonSelect ]
})
export class TrianguloComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}



import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-tarjetaheroes',
  templateUrl: './tarjetaheroes.component.html'
})
export class TarjetaheroesComponent {
   
   @Input() heroe!:Heroe;
}

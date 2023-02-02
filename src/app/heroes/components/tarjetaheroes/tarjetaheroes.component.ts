import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-tarjetaheroes',
  templateUrl: './tarjetaheroes.component.html',
  styles: [`
  mat-card {
    margin-top:20px
  }`]
})
export class TarjetaheroesComponent {
   
   @Input() heroe!:Heroe;
}

import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

heroes:Heroe[]=[];

   constructor(private HeroesService:HeroesService) {}

   ngOnInit():void{
    this.HeroesService.getHeroes().subscribe(heroes => this.heroes=heroes);
   }
}

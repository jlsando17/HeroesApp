import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
 
  termino:string ='';
  heroes: Heroe[]=[];
  
  constructor( private heroesService:HeroesService){}

  ngOnInit():{

  }

  buscando(){
    
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  constructor( private activatedRoute: ActivatedRoute) {}

   ngOnInit():void{
    this.activatedRoute.params
    .subscribe( ({id}) => console.log(id));
   }
}
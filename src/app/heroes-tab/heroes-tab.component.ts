import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service'
import { Hero } from '../models/hero'

@Component({
  selector: 'app-heroes-tab',
  templateUrl: './heroes-tab.component.html',
  styleUrls: ['./heroes-tab.component.css']
})
export class HeroesTabComponent implements OnInit {
  
  //declaración de la variable del modelo
  private  heroes:  Hero ;

  constructor(private  Lista:  ListaService) { }
  
  //Función al inicializar
  ngOnInit() {
      this.getHeroes();
  }

  //funcion que se ejecuta al inicializar
  public  getHeroes(){
      this.Lista.getHeroes().subscribe((data:  Hero) => {
          this.heroes  =  data;
          console.log(this.heroes)
      });
  }

  public  getHeroesByName(name :String){
    this.Lista.getHeroesByName(name).subscribe((data:  Hero) => {
        this.heroes  =  data;
        console.log(this.heroes)
    });
  }
}

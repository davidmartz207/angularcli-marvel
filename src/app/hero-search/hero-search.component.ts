import { Component , ViewChild } from '@angular/core';
import { HeroesTabComponent } from '../heroes-tab/heroes-tab.component'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent  {

  @ViewChild(HeroesTabComponent) tabs: HeroesTabComponent;
    
  //función de búsqueda
  public  getHeroesByName(name: String){
       
    this.tabs.getHeroesByName(name);
  }

}

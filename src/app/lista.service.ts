import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ListaService {

  constructor(private http: HttpClient) { }

  getHeroes(){
    return  this.http.get('http://gateway.marvel.com/v1/public/characters?apikey=cb3bc998eacd69f4ddb87c26be50b105&ts=1&hash=929f4d61d544444bd940d899c19da8e7');
  }

  getHeroesByName(name: String){
    return  this.http.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith='+name+'&apikey=cb3bc998eacd69f4ddb87c26be50b105&ts=1&hash=929f4d61d544444bd940d899c19da8e7');
  }

}

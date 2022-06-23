import { Component, OnInit } from '@angular/core';
import { FlaskService } from 'src/app/services/flask.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(
    private flaskService: FlaskService
  ) { }

  pokemon: string = "bulbasaur"
  simple: boolean = false;
  pokeData!: Object;
  
  ngOnInit(): void {

  }

  getPokemon(): void{
    if(this.simple){
      this.flaskService.getSimplePokemon(this.pokemon).subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      })
    } else {
      this.flaskService.getPokemon(this.pokemon).subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      })
    }
    
  }

  getRandomPokemon(): void{
    if(this.simple){
      this.flaskService.getSimpleRandomPokemon().subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      })
    } else {
      this.flaskService.getRandomPokemon().subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      })
    }

  }

  toggleSimple(){
    this.simple = !this.simple;
  }

}

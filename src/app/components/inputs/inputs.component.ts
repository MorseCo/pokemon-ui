import { Component, OnInit } from '@angular/core';
import { FlaskService } from 'src/app/services/flask.service';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor(
    private flaskService: FlaskService
  ) { }

  pokemon!: string;
  simple: boolean = false;
  pokeData: Object | undefined;
  ngOnInit(): void {

  }

  getPokemon(): void{
    this.flaskService.getPokemon(this.pokemon).subscribe(
      response => {
        this.pokeData = response;
      },
      error => {
        alert('Unable to get Pokemon')
      }
    )
    console.log(this.pokeData)
    console.log(this.pokemon)
    console.log(this.simple)

  }

  getRandomPokemon(){
    console.log("Getting Random Pokemon")
  }

  toggleSimple(){
    this.simple = !this.simple;
  }

}

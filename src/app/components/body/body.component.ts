import { Component, OnInit, ViewChild } from '@angular/core';
import { FlaskService } from 'src/app/services/flask.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog'



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(
    private flaskService: FlaskService,
    public dialog: MatDialog
  ) { }

  pokemon: string = "bulbasaur"
  simple: boolean = false;
  pokeData!: Object;
  loggedIn: boolean = false;
  
  ngOnInit(): void {
    if(!sessionStorage.getItem("username")) {
      this.dialog.open(LoginModalComponent);
    }
  }

  getPokemon(): void{
    if(this.simple){
      this.flaskService.getSimplePokemon(this.pokemon).subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      },
      (error) => {
        alert("Unable to retreieve Pokemon: " + JSON.stringify(error.status) + " " + JSON.stringify(error.statusText))
      })
    } else {
      this.flaskService.getPokemon(this.pokemon).subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      },
      (error) => {
        alert("Unable to retreieve Pokemon: " + JSON.stringify(error.status) + " " + JSON.stringify(error.statusText))
      })
    }
    
  }

  getRandomPokemon(): void{
    if(this.simple){
      this.flaskService.getSimpleRandomPokemon().subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      },
      (error) => {
        alert("Unable to retreieve Pokemon: " + JSON.stringify(error.status) + " " + JSON.stringify(error.statusText))
      })
    } else {
      this.flaskService.getRandomPokemon().subscribe((data) =>{
        this.pokeData = data;
        console.log(this.pokeData)
      },
      (error) => {
        alert("Unable to retreieve Pokemon: " + JSON.stringify(error.status) + " " + JSON.stringify(error.statusText))
      })
    }

  }

  toggleSimple(){
    this.simple = !this.simple;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FlaskService } from 'src/app/services/flask.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs';



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
  
  ngOnInit(): void {
    if(!sessionStorage.getItem("username")) {
      this.dialog.open(LoginModalComponent);
    }
  }

  getPokemon(): void{
    if(this.simple){
      this.flaskService.getSimplePokemon(this.pokemon).subscribe((data) =>{
        this.pokeData = data;
      },
      (error) => {
        alert(this.errorHelper(error))
      })
    } else {
      this.flaskService.getPokemon(this.pokemon).subscribe((data) =>{
        this.pokeData = data;
      },
      (error) => {
        alert(this.errorHelper(error))
      })
    }
  }

  getRandomPokemon(): void{
    if(this.simple){
      this.flaskService.getSimpleRandomPokemon().subscribe((data) =>{
        this.pokeData = data;
      },
      (error) => {
        alert(this.errorHelper(error))
      })
    } else {
      this.flaskService.getRandomPokemon().subscribe((data) =>{
        this.pokeData = data;
      },
      (error) => {
        alert(this.errorHelper(error))
      })
    }
  }

  toggleSimple(){
    this.simple = !this.simple;
  }

  errorHelper(errorObj: { status: any; statusText: any; }): string {
    return "Unable to retrieve Pokemon: " + JSON.stringify(errorObj.status) + " " + JSON.stringify(errorObj.statusText)
  }

}

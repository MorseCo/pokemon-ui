import { Component, OnInit } from '@angular/core';
import { FlaskService } from 'src/app/services/flask.service';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private flaskService: FlaskService,
     private bodyComponent: BodyComponent
     ) { }

  ngOnInit(): void {
  }

  login(){
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("password", this.password);
    this.flaskService.authenticate().subscribe(() =>{
      alert("You have successfully logged in");
    },
    (error) => {
      sessionStorage.setItem("username", "");
      sessionStorage.setItem("password", "");
      this.bodyComponent.checkLogin()
      alert("Account not found");
      
      
    })
  }
}

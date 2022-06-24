import { Component, OnInit } from '@angular/core';
import { FlaskService } from 'src/app/services/flask.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private flaskService: FlaskService,) { }

  ngOnInit(): void {
  }

  login(){
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("password", this.password);
    this.flaskService.authenticate().subscribe(() =>{
      alert("You have successfully logged in, please close the login window")
    },
    (error) => {
      alert("Account not found")
          //   alert("Account not found");
      this.username = ""
      this.password = ""
    })
  }
}

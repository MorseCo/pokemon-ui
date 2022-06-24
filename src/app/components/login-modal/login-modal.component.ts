import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.username == "ash" && this.password == "pikachu"){
      console.log("Logged In");
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("password", this.password);
    }
    else{
      alert("Account not found");
      this.username = ""
      this.password = ""
    }
  }
}

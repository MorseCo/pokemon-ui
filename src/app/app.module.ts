import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MatCardModule } from '@angular/material/card';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MatDialogModule } from '@angular/material/dialog';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxJsonViewerModule,
    MatCardModule,
    MatDialogModule

  ],
  providers: [BodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

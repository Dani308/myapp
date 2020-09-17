import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public email:string;
    public password:String;

    validar(){
     
      if(this.email==="a.alexander718@hotmail.com" && this.password==="123"){
          alert("Usuario y Contraseña Validos");
      }
      else{
        alert("Verifique sus datos");
      }
    }
}

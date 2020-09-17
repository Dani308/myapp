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
     
      if(this.email!="fgdfg" && this.password!="123"){
          alert("sdfsdfs");
      }
      else{
        alert("Datos corectos");
      }
    }
}

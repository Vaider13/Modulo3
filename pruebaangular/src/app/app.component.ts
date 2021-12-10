import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  website: string;
  talentos: string[];
  switch: boolean;

  constructor(){
    this.name = "Taylorswift";
    this.email = "taylorswift@gmail.com";
    this.website = "http://www.taylorswift.com";
    this.talentos =  ["Cantar", "Componer", "Bailar", "Correr", "Saltar"];
    this.switch = false;
  }

  mostrarTalentos() {
    this.switch = !this.switch;
  }
}

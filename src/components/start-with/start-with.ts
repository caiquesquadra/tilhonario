import { Component } from '@angular/core';

@Component({
  selector: 'card-funcao',
  templateUrl: 'start-with.html'
})
export class StartWithComponent {

  tittle: string;
  intro: string;

  constructor() {
    this.tittle = 'TILHONÁRIO!';
    this.intro = 'Sua nova jornada em busca do sucesso começa aqui.';
    
  }

}

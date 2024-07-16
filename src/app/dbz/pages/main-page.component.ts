import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  /*método del padre que se llama al emitir desde el list.component hijo */
  onDeleteCharacter(id:string):void {
    this.dbzService.deleteCharacterById(id);
  }

  /* método del padre que se llama al emitir desde el form.component hijo */
  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}

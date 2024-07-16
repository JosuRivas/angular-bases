import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class DbzFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  //event emmiter, se llama desde el main-page.component.html



  public character: Character = {
    name: '',
    power: 0
  }


  emitCharacter(): void{

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }

 }

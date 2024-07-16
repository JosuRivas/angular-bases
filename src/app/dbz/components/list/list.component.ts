import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class DbzListComponent {

  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  //la emision de eventos con @Output se hace cuando necesito emitir un valor que utilizaré en el componente padre
  @Output()
  onDeleteId:EventEmitter<string> = new EventEmitter();

  deleteCharacterBydId(id?:string): void{
    //emitir el id del personaje
    if (!id) return;

    this.onDeleteId.emit(id);
  }
}

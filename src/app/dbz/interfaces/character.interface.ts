
/*interfaz de tipo Character, sirve como un template para las instancias de tipo character
los atributos con ?: son opcionales, el resto son obligatorios al crear una instancia de este tipo
*/
export interface Character {
  id?:string;
  name:string;
  power:number;
}

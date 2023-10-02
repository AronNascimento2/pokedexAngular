import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input()
  pokemonCard!: string ;

  @Input()
  id!: number ;

  getPokemonImage() {
    const formatedNumber = this.leadingZero(this.id);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatedNumber}.png`;
  }

  leadingZero(str:  number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
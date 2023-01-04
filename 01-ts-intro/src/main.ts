import './style.css';
import typescriptLogo from './typescript.svg';

import { setupCounter } from './counter';
import { age, name, proffesion } from './bases/01-types';
import { address, deptos, zones } from './bases/02-objects';
import { Animal, Person, Pokemon } from './bases/03-classes';
import { Pokemon as Poke } from './bases/04-injection';
import {
	PokeapiAdapterAxios,
	PokeapiAdapterFetch,
} from './api/pokeapi.adapter';

const norberto = new Person('Norberto', 12345678);

const luna = new Animal('Luna', 'Terrier');

const charmander = new Pokemon(4, 'Charmander');
// charmander.getPokemonData().then((data) => console.log(data));

const pokeapiAdapterAxios = new PokeapiAdapterAxios();
const pokeapiAdapterFetch = new PokeapiAdapterFetch();

const pikachu = new Poke(25, 'Pikachu', pokeapiAdapterAxios);
// pikachu.getPokemonData().then((data) => console.log(data));

const bulbasaur = new Poke(1, 'Bulbasaur', pokeapiAdapterFetch);
// bulbasaur.getPokemonData().then((data) => console.log(data));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>

    <div class="card">
      <p>Hello, I am ${name}</p>
      <p>I am ${age} years old and I am a ${proffesion}</p>
    </div>

    <div class="card">
      <p>I live in ${address.city} ${address.street} ${address.number}</p>
      <p>${address.city} has several zones: ${zones.join(', ')}</p>
      <p>Favorite deptos</p>
        ${deptos
					.map(
						(depto) => `
          <ul>
            <li>Id: ${depto.id}</li>
            <li>Price: $${depto.price}</li>
            <li>Expense: $${depto.expense}</li>
            <li>Name: ${depto.name}</li>
            <li>Surface: ${depto.surface} m2</li>
          </ul>
        `
					)
					.join('')}
    </div>

    <div class="card">
      <p>My name is ${norberto.name} and my DNI is ${norberto.dni}</p>
      <p>My dog's name is ${luna.name} and is a ${luna.race}</p>
    </div>

    <div class="card">
      <p>My pokemon's name is ${charmander.name}</p>
      <p>It's ID is ${charmander.id}</p>
      <pre>${charmander.data}</pre>
      <p>${charmander.speak()}</p>
      <p>${charmander.scream()}</p>
    </div>

    <div class="card">
      <p>My pokemon's name is ${pikachu.name}</p>
      <p>It's ID is ${pikachu.id}</p>
    </div>

    <div class="card">
      <p>My pokemon's name is ${bulbasaur.name}</p>
      <p>It's ID is ${bulbasaur.id}</p>
    </div>

  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

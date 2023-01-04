import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter } from '../api/pokeapi.adapter';

class Pokemon {
	private _baseUrl: string = `https://pokeapi.co`;
	private _api: string = `/api/v2`;
	private _pokeapiUrl: string = `${this._baseUrl}${this._api}/pokemon`;

	constructor(
		public readonly id: number,
		public name: string,
		private readonly http: HttpAdapter
	) {}

	get image(): string {
		// const imageExtension: string = `.png`

		return `${this._pokeapiUrl}/${this.id}}`;
	}

	get data(): string {
		let name: string = this.name.toLowerCase();

		return `${this._pokeapiUrl}/${name}`;
	}

	public scream(): string {
		return `${this.name.toUpperCase()} !!!`;
	}

	public speak(): string {
		return `Hello, I am ${this.name}`;
	}

	public async getPokemonData(): Promise<PokeapiResponse> {
		let name: string = this.name.toLowerCase();
		const data = await this.http.get<PokeapiResponse>(
			`${this._pokeapiUrl}/${name}`
		);

		return data;
	}
}

export { Pokemon };

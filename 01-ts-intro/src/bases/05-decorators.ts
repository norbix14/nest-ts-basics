class DefaultPokemon {
	constructor(public readonly id: number, public name: string) {}

	public scream(): string {
		return `I DO NOT WANT TO SCREAM !!!`;
	}

	public speak(): string {
		return `I DO NOT WANT TO SPEAK !!!`;
	}
}

const PokemonDecorator = () => {
	return (target: Function) => {
		// console.log(target);
		return DefaultPokemon;
	};
};

@PokemonDecorator()
class Pokemon {
	constructor(
		public readonly id: number,
		public name: string // private readonly http: HttpAdapter
	) {}

	public scream(): string {
		return `${this.name.toUpperCase()} !!!`;
	}

	public speak(): string {
		return `Hello, I am ${this.name}`;
	}
}

export { Pokemon };

const Deprecated = (deprecationReason: string) => {
	return (
		target: any,
		memberName: string,
		propertyDescriptor: PropertyDescriptor
	) => {
		// console.log({ target });
		const reason = `Method '${memberName}' is deprecated. ${deprecationReason}`;
		return {
			get() {
				const wrapperFn = (...args: any[]) => {
					console.warn(reason);
					propertyDescriptor.value.apply(this, args);
					return reason;
				};
				return wrapperFn;
			},
		};
	};
};

class Pokemon {
	constructor(public readonly id: number, public name: string) {}

	public scream(): string {
		return `${this.name.toUpperCase()} !!!`;
	}

	@Deprecated("Use 'talk' method instead.")
	public speak(): string {
		return `Hello, I am ${this.name}`;
	}

	public talk(): string {
		return `Hello, I am ${this.name} !!!`;
	}
}

export { Pokemon };

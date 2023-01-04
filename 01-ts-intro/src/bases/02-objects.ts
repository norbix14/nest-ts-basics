interface Depto {
	id: number;
	name: string;
	price: number;
	expense?: number;
	surface?: number;
}

const address = {
	city: 'Rosario',
	country: 'Argentina',
	number: 100,
	street: 'Avenida',
};

const zones: string[] = [
	'Centro',
	'Norte',
	'Sur',
	'Este',
	'Oeste',
	'Pichincha',
	'Republica de la sexta',
	'Fisherton',
];

const deptos: Depto[] = [
	{
		id: 1,
		name: 'Depto 1',
		price: 60000,
		expense: 5000,
		surface: 50,
	},
	{
		id: 2,
		name: 'Depto 2',
		price: 55000,
		expense: 5000,
		surface: 45,
	},
	{
		id: 3,
		name: 'Depto 3',
		price: 90000,
	},
];

export { address, deptos, zones };

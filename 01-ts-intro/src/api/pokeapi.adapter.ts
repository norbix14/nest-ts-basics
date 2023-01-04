import axios from 'axios';

export interface HttpAdapter {
	get<T>(url: string, config?: {}): Promise<T>;
}

class PokeapiAdapterFetch implements HttpAdapter {
	private readonly _fetch = fetch;

	async get<T>(url: string, config = {}): Promise<T> {
		const response = await this._fetch(url, config);
		const data: T = await response.json();
		return data;
	}

	// async post(url: string, config = {}) {}

	// async patch(url: string, config = {}) {}

	// async delete(url: string, config = {}) {}
}

class PokeapiAdapterAxios implements HttpAdapter {
	private readonly _axios = axios;

	async get<T>(url: string, config = {}): Promise<T> {
		const { data } = await this._axios.get<T>(url, config);
		return data;
	}

	// async post(url: string, config = {}) {}

	// async patch(url: string, config = {}) {}

	// async delete(url: string, config = {}) {}
}

export { PokeapiAdapterAxios, PokeapiAdapterFetch };

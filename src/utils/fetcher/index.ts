import { fetcherFactory, type FetcherOptions } from "./factory";

const fetcher = fetcherFactory(import.meta.env.VITE_API_URL);

export type { FetcherOptions };
export { fetcher };

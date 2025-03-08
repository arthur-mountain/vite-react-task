import { isProd } from "../env";
import { notify } from "../notifer";

type FetcherOptions = RequestInit &
  Partial<{
    baseURL: string;
    responseType: "json" | "text" | "blob" | "arrayBuffer" | "bytes";
    mockData: unknown;
  }>;

const fetcherFactory = (
  baseURL: FetcherOptions["baseURL"],
  defaultOptions: FetcherOptions = {},
) => {
  return async function fetcher(url: string, options: FetcherOptions = {}) {
    const { baseURL: overrideBaseURL, mockData, ...overrideOption } = options;

    if (!isProd && mockData) {
      return mockData;
    }

    const fetchOptions: FetcherOptions = {
      ...defaultOptions,
      ...overrideOption,
      headers: {
        "Content-Type": "application/json",
        ...defaultOptions.headers,
        ...overrideOption.headers,
      },
    };

    try {
      const response = await fetch(
        `${overrideBaseURL || baseURL}${url}`,
        fetchOptions,
      );

      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${await response.text()}`,
        );
      }

      return await response[fetchOptions.responseType || "json"]();
    } catch (error) {
      notify("error", error);
    }
  };
};

export { fetcherFactory, type FetcherOptions };

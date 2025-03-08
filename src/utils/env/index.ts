const isProd = import.meta.env.VITE_ENVIRONMENT === "production";
const isDev = import.meta.env.VITE_ENVIRONMENT === "development";

export { isProd, isDev };

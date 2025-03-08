type ErrorLevel = "log" | "warn" | "info" | "error";

// Handle notify monitor
const notify = <Error = unknown>(level: ErrorLevel, error: Error) => {
  console[level](error);
};

export type { ErrorLevel };
export { notify };

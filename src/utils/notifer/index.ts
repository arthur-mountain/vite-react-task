type ErrorLevel = "log" | "warn" | "info" | "error";

const notify = <Error = unknown>(level: ErrorLevel, error: Error) => {
  console[level](error);
};

export type { ErrorLevel };
export { notify };

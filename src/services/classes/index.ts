import { fetcher } from "@/utils";
import { mockData } from "./mock-data";

const getClass = (classId: string) => {
  return fetcher(`api/v1/classes/${classId}`, { mockData });
};

export { getClass };

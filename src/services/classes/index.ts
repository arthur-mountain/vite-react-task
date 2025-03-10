import { fetcher } from "@/utils";
import { generateMockClass } from "./mock-data";

const getClass = (classId: string) => {
  return fetcher(`api/v1/classes/${classId}`, {
    mockData: generateMockClass(classId),
  });
};

export { getClass };

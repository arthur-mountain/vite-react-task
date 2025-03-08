import type { ClassResponseType } from "./types";

const mockStudents: ClassResponseType["students"] = [];

let isGuestCount = 0;
const randomNames = [
  "Philip",
  "Darrell",
  "Cody",
  "Bessie",
  "Wendy",
  "Esther",
  "Gloria",
  "Lee",
  "Ann",
  "Jacob",
  "Calvin",
  "Joe",
];

for (let i = 0; i < 500; i++) {
  const isGuest = Math.random() < 0.5;
  if (isGuest) isGuestCount++;
  mockStudents.push({
    id: String(i + 1).padStart(2, "0"),
    name: randomNames[i % randomNames.length],
    isGuest,
  });
}

const mockData: ClassResponseType = {
  classInfo: {
    id: "X58E9647",
    class: "302",
    course: "Science",
    qrcode: "https://www.classswift.viewsonic.io",
    studentCount: mockStudents.length - isGuestCount,
    totalStudentCount: mockStudents.length,
  },
  students: mockStudents,
};

export { mockData };

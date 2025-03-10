import type { ClassResponseType } from "./types";

const generateMockClass = (classId: string) => {
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

  return {
    classInfo: {
      id: classId,
      class: "302",
      course: "Science",
      qrcode: "https://www.classswift.viewsonic.io",
      qrcodeVersion: "1.1.7",
      studentCount: mockStudents.length - isGuestCount,
      totalStudentCount: mockStudents.length,
    },
    students: mockStudents,
  } satisfies ClassResponseType;
};

export { generateMockClass };

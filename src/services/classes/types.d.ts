export type StudentType = { id: string; name: string; isGuest: boolean };
export type ClassResopnseType = {
  classInfo: {
    id: string;
    class: string;
    course: "Science" | null;
    qrcode: string;
    studentCount: number;
    totalStudentCount: number;
  };
  students: StudentType[];
};

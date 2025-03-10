import type { ClassesType, ApiStatusType } from "@/services";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ClassState = {
  status: ApiStatusType;
  classInfo: ClassesType.ClassResponseType["classInfo"];
  students: ClassesType.ClassResponseType["students"];
  studentScore: { [studentId: string]: number };
};

const initialClassState: ClassState = {
  status: "loading",
  classInfo: {
    id: "",
    class: "",
    course: null,
    qrcode: "",
    studentCount: 0,
    totalStudentCount: 0,
  },
  students: [],
  studentScore: {},
};

const classSlice = createSlice({
  name: "class",
  initialState: initialClassState,
  reducers: {
    initClass: (
      state,
      action: PayloadAction<ClassesType.ClassResponseType | undefined>,
    ) => {
      if (action.payload) {
        state.status = "success";
        state.classInfo = action.payload.classInfo;
        state.students = action.payload.students;
      } else {
        state.status = "failed";
      }
    },
    updateStudentScore: (
      state,
      action: PayloadAction<{
        type: "increment" | "decrement";
        studentId: string;
      }>,
    ) => {
      console.log("update");
      const v = action.payload.type === "increment" ? 1 : -1;
      if (state.studentScore[action.payload.studentId]) {
        state.studentScore[action.payload.studentId] += v;
      } else {
        state.studentScore[action.payload.studentId] = v;
      }
    },
  },
});

export const { initClass, updateStudentScore } = classSlice.actions;
export { classSlice };

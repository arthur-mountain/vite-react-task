import type { ClassesType, ApiStatusType } from "@/services";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ClassState = {
  status: ApiStatusType;
  classInfo: ClassesType.ClassResponseType["classInfo"];
  students: ClassesType.ClassResponseType["students"];
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
  },
});

export const { initClass } = classSlice.actions;
export { classSlice };

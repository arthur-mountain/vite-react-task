import { pxToRem } from "@/utils";

const theme = {
  colors: {
    primary: "#3B82F6", // 藍色（選中的學生框）
    secondary: "#FACC15", // 黃色（背景點綴）
    success: "#10B981", // 綠色（+1 分數）
    danger: "#EF4444", // 紅色（-1 分數）
    neutral: "#D1D5DB", // 灰色（未選中的學生框）
    background: "#F3F4F6", // 整體背景顏色
    text: "#1F2937", // 深色文字
  },
  borderRadius: pxToRem(8),
  spacing: {
    sm: pxToRem(4),
    md: pxToRem(8),
    lg: pxToRem(16),
  },
  fontSize: {
    sm: pxToRem(12),
    md: pxToRem(16),
    lg: pxToRem(20),
  },
};

export { theme };

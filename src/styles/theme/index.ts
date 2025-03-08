import { pxToRem } from "@/utils";

const theme = {
  color: {
    primary: "#3B82F6", // 藍色（選中的學生框）
    secondary: "#FACC15", // 黃色（背景點綴）
    success: "#10B981", // 綠色（+1 分數）
    danger: "#EF4444", // 紅色（-1 分數）
    neutral: "#D1D5DB", // 灰色（未選中的學生框）
    background: "#F3F4F6", // 整體背景顏色
    text: "#1F2937", // 深色文字
  },
  borderRadius: {
    sm: pxToRem(4),
    md: pxToRem(8),
    lg: pxToRem(16),
    full: pxToRem(9999),
  },
  spacing: {
    sm: pxToRem(4),
    base: pxToRem(8),
    md: pxToRem(12),
    lg: pxToRem(16),
    xl: pxToRem(20),
  },
  fontSize: {
    sm: pxToRem(12),
    base: pxToRem(14),
    md: pxToRem(16),
    lg: pxToRem(20),
  },
};

type DefaultTheme = typeof theme;

export { theme, type DefaultTheme };

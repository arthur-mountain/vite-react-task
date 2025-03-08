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
    white: "#FFFFFF", // 白色
    black: "#000000", // 黑色
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
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  zIndex: {
    base: 1000,
    dropdown: 1010,
    sticky: 1020,
    modal: 1030,
    popover: 1040,
    toast: 1050,
    overlay: 1060,
    max: 9999,
  },
};

type DefaultTheme = typeof theme;

export { theme, type DefaultTheme };

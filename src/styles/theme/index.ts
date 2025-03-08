import { pxToRem } from "@/utils";

const theme = {
  color: {
    auto: "auto",
    transparent: "transparent",
    primary: "#3B82F6",
    secondary: "#FACC15",
    success: "#10B981",
    danger: "#EF4444",
    neutral: "#D1D5DB",
    background: "#F0F0F0",
    text: "#1F2937",
    white: "#FFFFFF",
    black: "#000000",
    unselected: "#D3D3D3",
  },
  borderRadius: {
    auto: "auto",
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
    "2xl": pxToRem(24),
    "3xl": pxToRem(28),
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
  gap: {
    sm: pxToRem(4),
    base: pxToRem(8),
    md: pxToRem(12),
    lg: pxToRem(16),
    xl: pxToRem(20),
    "2xl": pxToRem(24),
    "3xl": pxToRem(32),
  },
};

type DefaultTheme = typeof theme;

export type { DefaultTheme };
export { theme };

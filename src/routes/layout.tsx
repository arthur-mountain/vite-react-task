import type { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import "./app.css";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Layout };

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { Provider as StoreProvider } from "react-redux";
import { theme } from "@/styles/theme";
import { store } from "@/stores";
import "./app.css";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StoreProvider>
  );
};

export { Layout };

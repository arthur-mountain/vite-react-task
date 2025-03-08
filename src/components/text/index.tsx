import type { DefaultTheme } from "@/styles/theme";
import styled from "styled-components";

type TextProps = {
  variant?: keyof DefaultTheme["color"];
  size?: keyof DefaultTheme["fontSize"];
  weight?: keyof DefaultTheme["fontWeight"];
};

export const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.color[props.variant || "text"]};
  font-size: ${(props) => props.theme.fontSize[props.size || "base"]};
  font-weight: ${(props) => props.weight || "normal"};
`;

import type { JSX } from "react";
import type { DefaultTheme } from "@/styles/theme";
import styled from "styled-components";

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: keyof DefaultTheme["color"];
  size?: keyof DefaultTheme["fontSize"];
  weight?: keyof DefaultTheme["fontWeight"];
};

const Text = styled.p.attrs<TextProps>(({ as: elementType = "p" }) => ({
  as: elementType,
}))<TextProps>`
  color: ${(props) => props.theme.color[props.variant || "text"]};
  font-size: ${(props) => props.theme.fontSize[props.size || "base"]};
  font-weight: ${(props) => props.theme.fontWeight[props.weight || "normal"]};
`;

export { Text, type TextProps };

import type { JSX } from "react";
import type { DefaultTheme } from "@/styles/theme";
import styled from "styled-components";

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  $variant?: keyof DefaultTheme["color"];
  $size?: keyof DefaultTheme["fontSize"];
  $weight?: keyof DefaultTheme["fontWeight"];
  $align?: "left" | "center" | "right";
};

const Text = styled.p.attrs<TextProps>(({ as: elementType = "p" }) => ({
  as: elementType,
}))<TextProps>`
  color: ${(props) => props.theme.color[props.$variant || "text"]};
  font-size: ${(props) => props.theme.fontSize[props.$size || "base"]};
  font-weight: ${(props) => props.theme.fontWeight[props.$weight || "normal"]};
  text-align: ${(props) => props.$align || "center"};
  paddig: 0;
  margin: 0;
`;

export type { TextProps };
export { Text };

import type { DefaultTheme } from "@/styles/theme";
import styled, { type StyleFunction } from "styled-components";

type ButtonProps = {
  variant?: keyof DefaultTheme["color"];
  size?: keyof DefaultTheme["fontSize"];
};

const getButtonPadding: StyleFunction<ButtonProps> = (props) => {
  switch (props.size) {
    case "sm":
      return `${props.theme.spacing.sm} ${props.theme.spacing.base}`;
    case "md":
      return `${props.theme.spacing.base} ${props.theme.spacing.md}`;
    case "lg":
      return `${props.theme.spacing.md} ${props.theme.spacing.lg}`;
    default:
      return `${props.theme.spacing.base} ${props.theme.spacing.md}`;
  }
};

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.color[props.variant || "primary"]};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${getButtonPadding};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export { Button, type ButtonProps };

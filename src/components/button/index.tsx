import type { ComponentProps } from "react";
import type { DefaultTheme } from "@/styles/theme";
import styled, { type StyleFunction } from "styled-components";

type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof DefaultTheme["color"] | "text";
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) =>
    variant === "text"
      ? theme.color.transparent
      : theme.color[variant || "primary"]};
  color: ${({ theme, variant }) =>
    variant === "text" ? theme.color.text : theme.color.white};
  border: none;
  outline: none;
  border-radius: ${({ theme, variant }) =>
    variant === "text" ? theme.borderRadius.auto : theme.borderRadius.md};
  padding: ${getButtonPadding};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;

  ${({ theme, variant }) =>
    variant === "text"
      ? `
  padding-left: 0;
  padding-right: 0;
  &:disabled {
    color: ${theme.color.neutral};
    cursor: not-allowed;
  }
`
      : `
  &:disabled {
    background-color: ${theme.color.neutral};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`};
`;

export type { ButtonProps };
export { Button };

import type { ComponentProps } from "react";
import type { DefaultTheme } from "@/styles/theme";
import styled, { type StyleFunction } from "styled-components";

type ButtonProps = ComponentProps<"button"> & {
  $variant?: keyof DefaultTheme["color"] | "text";
  $size?: keyof DefaultTheme["fontSize"];
};

const getButtonPadding: StyleFunction<ButtonProps> = ({ theme, $size }) => {
  switch ($size) {
    case "sm":
      return `${theme.spacing.sm} ${theme.spacing.base}`;
    case "md":
      return `${theme.spacing.base} ${theme.spacing.md}`;
    case "lg":
      return `${theme.spacing.md} ${theme.spacing.lg}`;
    default:
      return `${theme.spacing.base} ${theme.spacing.md}`;
  }
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $variant }) =>
    $variant === "text"
      ? theme.color.transparent
      : theme.color[$variant || "primary"]};
  color: ${({ theme, $variant }) =>
    $variant === "text" ? theme.color.text : theme.color.white};
  border: none;
  outline: none;
  border-radius: ${({ theme, $variant }) =>
    $variant === "text" ? theme.borderRadius.auto : theme.borderRadius.md};
  padding: ${getButtonPadding};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;

  ${({ theme, $variant }) =>
    $variant === "text"
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

import { styled } from "styled-components";
import { Button, type ButtonProps } from "./base";

const _CloseButton = styled(Button)`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.black};

  &:hover {
    color: ${({ theme }) => theme.color.danger};
  }
`;

const CloseButton = (props: Omit<ButtonProps, "children">) => {
  return <_CloseButton {...props}>&times;</_CloseButton>;
};

export { CloseButton };

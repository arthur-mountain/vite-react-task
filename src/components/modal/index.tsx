import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { pxToRem } from "@/utils";
import { Button } from "../button";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  disableCloseOnOverlayClick?: boolean;
  maxWidth?: number;
}>;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

const ModalContent = styled.div<{ maxWidth: ModalProps["maxWidth"] }>`
  position: relative;
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: ${({ maxWidth = 900 }) => pxToRem(maxWidth)};
  max-height: 90vh;
  margin: 0 ${({ theme }) => theme.spacing.xl};
`;

const CloseButton = styled(Button)`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xl};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.black};

  &:hover {
    color: ${({ theme }) => theme.color.danger};
  }
`;

const Modal = ({
  isOpen,
  onClose,
  children,
  disableCloseOnOverlayClick = false,
  maxWidth,
}: ModalProps) => {
  const onOverlayClick = () => {
    if (!disableCloseOnOverlayClick) onClose();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={onOverlayClick}>
      <ModalContent maxWidth={maxWidth} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export type { ModalProps };
export { Modal };

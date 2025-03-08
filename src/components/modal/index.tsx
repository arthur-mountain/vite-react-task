import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { pxToRem } from "@/utils";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  disableCloseOnOverlayClick?: boolean;
}>;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: ${pxToRem(480)};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.base};
  right: ${({ theme }) => theme.spacing.base};
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.neutral};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.danger};
  }
`;

const Modal = ({
  isOpen,
  onClose,
  children,
  disableCloseOnOverlayClick = false,
}: ModalProps) => {
  const onOverlayClick = () => {
    if (disableCloseOnOverlayClick) onClose();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={onOverlayClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export { Modal };

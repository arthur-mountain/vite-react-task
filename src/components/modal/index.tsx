import { type PropsWithChildren, type MouseEventHandler, useRef } from "react";
import styled from "styled-components";
import { pxToRem } from "@/utils";
import { Button } from "../button";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  disableCloseOnOverlayClick?: boolean;
  hideOverlay?: boolean;
  maxWidth?: number;
  unmountOnClose?: boolean;
}>;

const ModalOverlay = styled.div<{
  $isOpen: ModalProps["isOpen"];
  $hideOverlay: ModalProps["hideOverlay"];
}>`
  position: fixed;
  inset: 0;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  background: ${({ theme, $hideOverlay }) =>
    $hideOverlay ? theme.color.transparent : "rgba(0, 0, 0, 0.3)"};
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

const ModalContent = styled.div<{
  $maxWidth: NonNullable<ModalProps["maxWidth"]>;
}>`
  position: relative;
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: min(${({ $maxWidth }) => pxToRem($maxWidth)}, 90vw);
  max-height: 90vh;
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
  maxWidth = 900,
  disableCloseOnOverlayClick = false,
  hideOverlay = false,
  unmountOnClose = false,
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const onOverlayClick: MouseEventHandler<HTMLDivElement> = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.target === overlayRef.current && !disableCloseOnOverlayClick) {
      onClose();
    }
  };

  return (
    <ModalOverlay
      ref={overlayRef}
      $isOpen={isOpen}
      $hideOverlay={hideOverlay}
      onClick={onOverlayClick}
    >
      <ModalContent $maxWidth={maxWidth}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {unmountOnClose ? (isOpen ? children : null) : children}
      </ModalContent>
    </ModalOverlay>
  );
};

export type { ModalProps };
export { Modal };

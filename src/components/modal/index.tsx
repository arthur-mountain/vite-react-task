import { type PropsWithChildren, type MouseEventHandler, useRef } from "react";
import styled from "styled-components";
import { pxToRem } from "@/utils";
import { CloseButton } from "../button";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose?: () => void;
  disableCloseOnOverlayClick?: boolean;
  hideOverlay?: boolean;
  maxWidth?: string | number;
  unmountOnClose?: boolean;
  hideCloseButton?: boolean;
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
  max-width: min(
    ${({ $maxWidth }) =>
      typeof $maxWidth === "string" ? $maxWidth : pxToRem($maxWidth)},
    90vw
  );
  max-height: 90vh;
`;

const Modal = ({
  isOpen,
  onClose,
  children,
  maxWidth = 900,
  disableCloseOnOverlayClick = false,
  hideOverlay = false,
  unmountOnClose = false,
  hideCloseButton = false,
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const onOverlayClick: MouseEventHandler<HTMLDivElement> = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (
      onClose &&
      !disableCloseOnOverlayClick &&
      evt.target === overlayRef.current
    ) {
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
        {hideCloseButton ? null : <CloseButton onClick={onClose} />}
        {unmountOnClose ? (isOpen ? children : null) : children}
      </ModalContent>
    </ModalOverlay>
  );
};

export type { ModalProps };
export { Modal };

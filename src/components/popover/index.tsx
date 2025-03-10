import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type PropsWithChildren,
} from "react";
import styled from "styled-components";

type PopoverProps = PropsWithChildren<{
  content: ReactNode;
}>;

const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverContent = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  z-index: ${({ theme }) => theme.zIndex.popover};
`;

const Popover = ({ content, children }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PopoverContainer ref={ref}>
      <span onClick={() => setIsOpen((prev) => !prev)}>{children}</span>
      <PopoverContent $isOpen={isOpen}>{content}</PopoverContent>
    </PopoverContainer>
  );
};

export type { PopoverProps };
export { Popover };

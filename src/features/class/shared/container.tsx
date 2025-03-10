import { useState, type PropsWithChildren } from "react";
import { styled } from "styled-components";
import { CloseButton } from "@/components";

const _Container = styled.div`
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Container = ({ children }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(true);
  const onClose = () => setIsVisible(false);

  return isVisible ? (
    <_Container>
      <CloseButton onClick={onClose} />
      {children}
    </_Container>
  ) : null;
};

export { Container };

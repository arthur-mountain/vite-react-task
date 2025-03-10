import styled from "styled-components";
import { Modal } from "@/components";
import { StudentList } from "./student-list";
import { JoinClass } from "./join-class";
import { useInit } from "./use-init";

const ClassContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;

const Class = () => {
  const classTitle = useInit();

  return (
    <Modal
      isOpen
      maxWidth="90vw"
      hideCloseButton
      unmountOnClose
      disableCloseOnOverlayClick
    >
      <ClassContentContainer>
        <JoinClass title={classTitle} />
        <StudentList title={classTitle} />
      </ClassContentContainer>
    </Modal>
  );
};

export { Class };

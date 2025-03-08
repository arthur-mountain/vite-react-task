import { Modal, type ModalProps, type ButtonProps } from "@/components";
import { useState } from "react";
import { StudentList } from "./student-list";
import { JoinClass } from "./join-class";
import { useInit } from "./use-init";

type ModalType = "studentList" | "join";

type ClassProps = Pick<ModalProps, "isOpen" | "onClose">;

const Class = ({ isOpen, onClose }: ClassProps) => {
  const [modalType, setModalType] = useState<ModalType>("studentList");
  const classTitle = useInit();

  const changeModalType: (type: ModalType) => ButtonProps["onClick"] =
    (type) => (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      setModalType(type);
    };

  const _onClose = () => {
    setModalType("studentList");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={_onClose}
      maxWidth={modalType === "join" ? 450 : undefined}
      unmountOnClose
    >
      {modalType === "studentList" ? (
        <StudentList title={classTitle} joinClass={changeModalType("join")} />
      ) : (
        <JoinClass title={classTitle} back={changeModalType("studentList")} />
      )}
    </Modal>
  );
};

export { Class, type ClassProps };

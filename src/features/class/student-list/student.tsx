import type { ClassesType } from "@/services";
import styled from "styled-components";
import { useDispatch, useSelector } from "@/stores";
import { pxToRem } from "@/utils";
import { Button, type ButtonProps, Text } from "@/components";
import { updateStudentScore } from "../reducer/slice";

const StudentContainer = styled.li<{
  $isGuest: ClassesType.StudentType["isGuest"];
}>`
  border: 1px solid
    ${({ theme, $isGuest }) =>
      $isGuest ? theme.color.neutral : theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: ${pxToRem(150)};
  text-align: center;
  overflow: hidden;
  cursor: ${({ $isGuest }) => ($isGuest ? "not-allowed" : "auto")};
`;

const Id = styled.div<{ $isGuest: ClassesType.StudentType["isGuest"] }>`
  background-color: ${({ theme, $isGuest }) =>
    $isGuest ? theme.color.neutral : theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.base};
`;

const Name = styled.div<{ $isGuest: ClassesType.StudentType["isGuest"] }>`
  color: ${({ theme, $isGuest }) =>
    $isGuest ? theme.color.neutral : theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: ${({ theme }) => theme.spacing.md};
`;

const CountContainer = styled.div<{
  $isGuest: ClassesType.StudentType["isGuest"];
}>`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid
    ${({ theme, $isGuest }) =>
      $isGuest ? theme.color.neutral : theme.color.primary};
  padding: ${({ theme }) => theme.spacing.sm};
`;

const CountButton = styled(Button)<{
  $actionType: "increment" | "decrement";
}>`
  background-color: ${({ theme, $actionType }) =>
    $actionType === "increment"
      ? theme.color.success
      : $actionType === "decrement"
        ? theme.color.danger
        : theme.color.transparent};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const Count = styled(Text)<{ $isGuest: ClassesType.StudentType["isGuest"] }>`
  color: ${({ theme, $isGuest }) =>
    $isGuest ? theme.color.neutral : theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Student = ({ student }: { student: ClassesType.StudentType }) => {
  const { id, name, isGuest } = student;
  const dispatch = useDispatch();
  const score = useSelector((state) => state.class.studentScore[id] ?? 0);

  const updateScore: (
    type: Parameters<typeof updateStudentScore>[0]["type"],
  ) => ButtonProps["onClick"] = (type) => (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch(updateStudentScore({ type, studentId: id }));
  };

  return (
    <StudentContainer $isGuest={isGuest}>
      <Id $isGuest={isGuest}>{id}</Id>
      <Name $isGuest={isGuest}>{isGuest ? "Guest" : name}</Name>
      <CountContainer $isGuest={isGuest}>
        <CountButton
          $actionType="decrement"
          disabled={isGuest}
          onClick={updateScore("decrement")}
        >
          -1
        </CountButton>
        <Count $isGuest={isGuest}>{score}</Count>
        <CountButton
          $actionType="increment"
          disabled={isGuest}
          onClick={updateScore("increment")}
        >
          +1
        </CountButton>
      </CountContainer>
    </StudentContainer>
  );
};

export { Student };

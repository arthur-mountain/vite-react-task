import type { ClassesType } from "@/services";
import { useState } from "react";
import styled from "styled-components";
import { Button, Text } from "@/components";
import { pxToRem } from "@/utils";

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
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <StudentContainer $isGuest={isGuest}>
      <Id $isGuest={isGuest}>{id}</Id>
      <Name $isGuest={isGuest}>{isGuest ? "Guest" : name}</Name>
      <CountContainer $isGuest={isGuest}>
        <CountButton
          $actionType="decrement"
          disabled={isGuest}
          onClick={handleDecrement}
        >
          -1
        </CountButton>
        <Count $isGuest={isGuest}>{count}</Count>
        <CountButton
          $actionType="increment"
          disabled={isGuest}
          onClick={handleIncrement}
        >
          +1
        </CountButton>
      </CountContainer>
    </StudentContainer>
  );
};

export { Student };

import styled from "styled-components";
import { useMemo } from "react";
import { useSelector } from "@/stores";
import { Text } from "@/components";
import { Student } from "../student";

const GroupContainer = styled.div`
  width: 100%;
`;

const GroupItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  &:last-child {
    margin-bottom: 0;
  }
`;

const StudentWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin: 0;
  padding: 0;
`;

const StudentGroup = () => {
  const students = useSelector((state) => state.class.students);
  const groups = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < students.length; i += 5) {
      chunks.push(students.slice(i, i + 5));
    }
    return chunks;
  }, [students]);

  return (
    <GroupContainer>
      {groups.map((group, index) => (
        <GroupItem key={index}>
          <Text
            as="h5"
            $variant="success"
            $align="left"
            $size="lg"
            $weight="bold"
          >
            Group {index + 1}
          </Text>
          <StudentWrapper>
            {group.map((student) => (
              <Student key={student.id} student={student} />
            ))}
          </StudentWrapper>
        </GroupItem>
      ))}
    </GroupContainer>
  );
};

export { StudentGroup };

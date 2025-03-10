import { styled, useTheme } from "styled-components";
import { User } from "lucide-react";
import { useSelector } from "@/stores";
import { Text, Tabs } from "@/components";
import { Container } from "../shared";
import { Menu } from "./menu";
import { Students } from "./students";
import { StudentGroup } from "./student-group";

type StudentListProps = {
  title: string;
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.base};
  padding: ${({ theme }) => theme.spacing["xl"]}
    ${({ theme }) => theme.spacing["3xl"]};
`;

const StudensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.sm};
`;

const StudentList = ({ title }: StudentListProps) => {
  const theme = useTheme();
  const { id, studentCount, totalStudentCount } = useSelector(
    (state) => ({
      id: state.class.classInfo.id,
      studentCount: state.class.classInfo.studentCount,
      totalStudentCount: state.class.classInfo.totalStudentCount,
    }),
    { equalityFn: (prev, next) => prev.id === next.id },
  );

  return (
    <Container>
      <TitleContainer>
        <Text $weight="extrabold">{title}</Text>
        <StudensContainer>
          <User size={20} fill={theme.color.black} />
          <Text $weight="bold">
            {studentCount} / {totalStudentCount}
          </Text>
        </StudensContainer>
      </TitleContainer>
      <Tabs
        tabs={[
          {
            key: `${id}-students`,
            label: "Student List",
            content: <Students />,
          },
          { key: `${id}-group`, label: "Group", content: <StudentGroup /> },
        ]}
        rightComponents={[<Menu key={`${id}-menu`} />]}
      />
    </Container>
  );
};

export type { StudentListProps };
export { StudentList };

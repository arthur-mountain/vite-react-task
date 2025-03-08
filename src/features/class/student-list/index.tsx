import { Text, Button, type ButtonProps, Tabs } from "@/components";
import { styled, useTheme } from "styled-components";
import { User } from "lucide-react";
import { useSelector } from "@/stores";
import { Menu } from "./menu";
import { Students } from "./students";
import { StudentGroup } from "./student-group";

type StudentListProps = {
  title: string;
  joinClass: ButtonProps["onClick"];
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

const StudentList = ({ title, joinClass }: StudentListProps) => {
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
    <>
      <TitleContainer>
        <Text $weight="extrabold">{title}</Text>
        <StudensContainer>
          <User size={20} fill={theme.color.black} />
          <Text $weight="bold">
            {studentCount} / {totalStudentCount}
          </Text>
        </StudensContainer>
        <Button $variant="secondary" onClick={joinClass}>
          Join Class
        </Button>
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
    </>
  );
};

export type { StudentListProps };
export { StudentList };

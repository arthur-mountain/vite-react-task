import { styled } from "styled-components";
import { useSelector } from "@/stores";
import { Student } from "../student";

const StudentsContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gap.lg};
`;

const Students = () => {
  const students = useSelector((state) => state.class.students);

  return (
    <StudentsContainer>
      {students.map((student) => {
        return <Student key={student.id} student={student} />;
      })}
    </StudentsContainer>
  );
};

export { Students };

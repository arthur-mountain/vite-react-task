import { useState, type MouseEventHandler, type ReactNode } from "react";
import styled from "styled-components";
import { pxToRem } from "@/utils";

type TabProps = {
  key: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabProps[];
  rightComponents?: ReactNode[];
};

const TabsContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TabListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing["3xl"]};
`;

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: none;
`;

const TabItem = styled.li<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  background-color: ${({ theme, $active }) =>
    $active ? theme.color.white : theme.color.unselected};
  color: ${({ theme, $active }) =>
    $active ? theme.color.primary : theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  border-radius: ${({ theme }) => theme.borderRadius.sm}
    ${({ theme }) => theme.borderRadius.sm} 0 0;

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.color.white : theme.color.neutral};
  }
`;

const TabContent = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg}
    ${({ theme }) => theme.borderRadius.lg} 0 0;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  max-height: 580px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: ${pxToRem(8)};
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.unselected};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.color.neutral};
  }
`;

const Tabs = ({ tabs, rightComponents }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick: (index: number) => MouseEventHandler<HTMLLIElement> =
    (index) => (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      setActiveTab(index);
    };

  return (
    <TabsContainer>
      <TabListContainer>
        <TabList>
          {tabs.map((tab, index) => (
            <TabItem
              key={tab.key}
              $active={activeTab === index}
              onClick={onTabClick(index)}
            >
              {tab.label}
            </TabItem>
          ))}
        </TabList>
        {rightComponents}
      </TabListContainer>

      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabsContainer>
  );
};

export type { TabsProps };
export { Tabs };

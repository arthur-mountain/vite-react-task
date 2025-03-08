import { Popover, Text } from "@/components";
import { EllipsisVertical } from "lucide-react";
import { useTheme } from "styled-components";

const Menu = () => {
  const theme = useTheme();

  return (
    <Popover content={<Text>Hello</Text>}>
      <EllipsisVertical
        color={theme.color.black}
        style={{ cursor: "pointer" }}
      />
    </Popover>
  );
};

export { Menu };

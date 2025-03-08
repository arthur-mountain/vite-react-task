import { EllipsisVertical } from "lucide-react";
import { useTheme } from "styled-components";
import { Popover, Text } from "@/components";

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

// style.d.ts
import "styled-components";
import { DefaultTheme as CustomDefaultTheme } from "@/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends CustomDefaultTheme {}
}

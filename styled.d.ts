// import original module declarations
import "styled-components";
import { defaultTheme as theme } from "/styles/theme";

type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontColor: string;
    routeFontColor: string;
    headerColor: string;
    accentColor: {
      fontColor: string;
      contentColor: string;
    };
    bgColor: string;
    shadow: {
      defaultShadow: string;
      buttonShadow: string;
    };
    tagColor: string;
    indexColor: {
      fontColor: string;
      bgColor: string;
    };
  }
}

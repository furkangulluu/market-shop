import 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme {
      colors: {
        primary: string;
        secondary: string;
        border: string;
        background: string;
        textColor: string;
      };
    }
}
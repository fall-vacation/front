// styled.d.ts
import "styled-components";

// styled-components안에 들어있는 DefaultTheme 형식 지정해주기
declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: any;
    subColor: any;
  }
}

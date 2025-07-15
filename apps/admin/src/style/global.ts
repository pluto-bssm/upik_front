// packages/ui/global.ts
import { css } from "@emotion/react";
const globalStyles = css`
  * {
      padding: 0;
      margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, 'Noto Sans KR', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  html,
  body {
    padding: 0;
    margin: 0;
      width: 100%;
      height: 100%;
    background-color: #ffffff;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export default globalStyles;
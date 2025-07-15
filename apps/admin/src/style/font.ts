/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const fontGenerator = (
    weight: number,
    size: number,
    lineHeight: number,
    letterSpacing: number,
) => css`
  font-family: 'Beanpole', 'Pretendard', sans-serif;
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}px;
  letter-spacing: ${letterSpacing}px;
`;

const font = {
    D1: fontGenerator(700, 2, 1, 0),
    D2: fontGenerator(700, 2, 2, 0),

    H1: fontGenerator(700, 1.5, 1, 0),
    H2: fontGenerator(700, 0.8, 1, 0),
    H3: fontGenerator(500, 1, 1, 0),
    H4: fontGenerator(600, 1.25, 1, 0.15),
    H5: fontGenerator(600, 1.125, 1, 0.15),
    H6: fontGenerator(500, 1.125, 1, 0.15),

    P1: fontGenerator(400, 3.25, 1, 0),
    P2: fontGenerator(600, 3.25, 1, -0.15),
    btn1: fontGenerator(500, 2, 2, 0),
    btn2: fontGenerator(500, 2, 1, 0),
    warn: fontGenerator(500, 1, 1, 0),
};

export default font;
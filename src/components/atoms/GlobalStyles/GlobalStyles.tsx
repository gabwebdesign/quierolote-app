import { Global, css } from '@emotion/react';

const GlobalStylesCss = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={GlobalStylesCss} />;
};

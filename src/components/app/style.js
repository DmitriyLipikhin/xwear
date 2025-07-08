
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: "RF Dewi Extended", sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #121214;
}

.visually-hidden {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px); /* IE8+ */
  clip-path: inset(50%); /* Modern browsers */
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
`;
'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --background: #ffffff;
  --foreground: #171717;
  --black: #000;
  --dark-gray: #1C1C1C;
  --medium-gray: #242424;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #fff4e6;
  }
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  text-align: justify;
}

button {
  margin: auto;
  padding: 8px 20px;
  color: var(--background);
  background-color: var(--foreground);
  cursor: pointer;
}

ul, ol {
  text-align: justify;
  margin-left: 2rem;

  .sub-item {
    list-style-type: square;
    margin-left: 3rem;
  }
}

li {
  margin-bottom: 1rem;
}

.container {
  display: flex;
  width: 100vw;
  height: 100vh;

  align-content: center;
  justify-content: center;
}


.bold {
  font-weight: 700;
}
`;

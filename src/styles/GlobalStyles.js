import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root{
  --color-soft-blue: hsl(231, 69%, 60%);
  --color-soft-red: hsl(0, 94%, 66%);
  --color-grayish-blue: hsl(229, 8%, 60%);
  --color-dark-blue: hsl(229, 31%, 21%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Rubik", sans-serif;
  color: var(--color-grayish-blue);
  line-height: 1.5;
  font-size: 1.8rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}
`

export default GlobalStyles

import { css } from '@emotion/react';
import 'modern-normalize';

export const colors = {
  mainBgColor: '#FFFFFF',
  secondaryBgColor: '#f3f3f3',
  darkBgColor: '#000000',
  mainAccentColor: '#0b44cd',
  secondaryAccentColor: '#3470ff',
  textDarkColor: '#121417',
  textLightColor: '#FFFFFF',
  textSecondLightColor: '#f3f3f3',
  textHoverGrayColor: '#a9a9a9',
  inputBgColor: '#F7F7FB',
};

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
  :root {
    --transition-duration: 250ms;
    --transition-func: ease;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: ${colors.mainBgColor};
    /* overflow: hidden; */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    font: inherit;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

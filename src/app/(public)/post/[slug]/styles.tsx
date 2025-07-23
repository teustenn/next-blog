'use client';

import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;

  img {
    width: 100vw;
    height: 320px;
    object-fit: cover;
  }

  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }

  h2 {
    font-size: 2rem;
    margin: 2rem 0;
  }

  h3 {
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  p {
    margin-bottom: 1rem;
  }

  ul > li {
    margin-bottom: 1rem;
  }

  .content {
    display: block;
    width: 1080px;
    margin: 0 auto;
  }
`;

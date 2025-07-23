'use client';
import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  max-width: 1080px;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: min-content;

  margin: auto;
  gap: 2rem;
  padding: 2rem;
`;

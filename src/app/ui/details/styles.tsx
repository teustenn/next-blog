'use client';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 0.8rem;
  background-color: var(--black);

  .content {
    width: 1080px;
    margin: 0 auto;
    display: flex;

    flex-direction: row;
    justify-content: end;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.2rem;
    }
  }

  .info {
    font-weight: 700;
  }
`;

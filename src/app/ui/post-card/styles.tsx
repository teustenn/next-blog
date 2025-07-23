'use client';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-radius: 0.5rem;
  background-color: var(--dark-gray);
  overflow: hidden;

  img {
    width: 100%;
    max-height: 120px;
    object-fit: cover;

    transition: 0.2s;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  span {
    padding: 0.5rem;
    background-color: var(--dark-gray);
    z-index: 1;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

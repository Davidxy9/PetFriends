import styled from 'styled-components';

export const Container = styled.div`
  background: var(--titles);
  display: flex;
  padding: 2rem 5rem 0rem 5rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: #b41c8b;
    margin-right: 1rem;
  }
`;

export const ContainerInicio = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  strong {
    font-size: 1.8rem;
  }

  svg {
    margin-left: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
  }

  p {
    font-size: 0.7rem;

    font-weight: bold;
    color: var(--green);
  }
`;

export const ContainerCarrinho = styled.div`
  @media (max-width: 600px) {
    display: none;
  }

  align-self: center;

  svg {
    margin-right: 1rem;
  }

  span {
    font-weight: bold;
    color: #3F3F3F;

  }

  p {
    margin: 0 2rem 0 2rem;
    color: var(--background);
    font-weight: bold;
  }
`;

export const CardMeio = styled.div`
  margin: 0 auto 0 2rem;
`;

export const LinhaMeio = styled.div`
  @media (max-width: 600px) {
    display: none;
  }

  border-right: 1px solid #ececec;
  width: 10px;
  margin: 0 2rem 0 2rem;
`;

export const Opt = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 2fr; */

  display: flex;
  /* align-self: flex-end; */

  @media (min-width: 600px) {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    span {
      margin-right: 0.5rem;
      margin-left: 0.2rem;
      font-weight: 500;
    }
    p {
      margin-right: 4rem;
      color: #818181;
    }
  }
`;

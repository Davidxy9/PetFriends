import styled from 'styled-components';

export const Container = styled.div`
    background: var(--titles);
    display: grid;
    align-items: center;

  @media (min-width: 600px) {
    grid-template-columns: auto auto auto;
  }
`;

export const ContainerInicio = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  strong {
    font-size: 28px;
  }

  img {
    margin-left: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
  }

  p {
    font-size: 12px;
    font-weight: bold;
    color: var(--green);
  }
`;

export const ContainerCarrinho = styled.div`
  display: grid;
  /* margin-left: 1rem; */
  grid-template-columns: auto auto;

  grid-template-areas: 'imagem notificao' '. valor';

  align-items: center;
  justify-content: center;

  img {
    margin-right: 1rem;

    grid-area: imagem;
  }

  span {
    grid-area: notificao;
  }

  p {
    grid-area: valor;
  }
`;

export const CardMeio = styled.div`
  @media (min-width: 600px) {
    border-right: 1px solid #ececec;
    justify-content: center;
    align-items: center;
    align-self: center;
  }

  @media (max-width: 590px) {
    border-bottom: 1px solid #ececec;
    /* margin: 5px; */
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

export const Opt = styled.div`
  display: flex;
  margin-top: 1rem;

  span {
    margin-right: 0.5rem;
  }
  p {
    margin-right: 4rem;
  }
`;

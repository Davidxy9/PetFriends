import storeImg2 from '../../assets/storeImg2.png';

import { FaMotorcycle, FaShoppingCart, FaRegClock } from 'react-icons/fa';

import {
  Container,
  Opt,
  ContainerCarrinho,
  ContainerInicio,
  CardMeio,
  LinhaMeio,
} from './styles';

export function Summary() {
  return (
    <Container>
      {/*  */}
      <img src={storeImg2} alt='Im agem da loja' />
      <CardMeio>
        {/* div parte de cima */}
        <ContainerInicio>
          <strong>Pet Friends Acessories</strong>
          {/* <img src={clockImg} alt='Imagem relógio' /> */}
          <FaRegClock color={'#1BBB16'} />
          <p>ABERTO AGORA</p>
        </ContainerInicio>
        {/* fim da div parte de cima */}

        <p>
          Avenida Rio Grande do Sul,1520,Estados | 58030-021 | João Pessoa - PB
        </p>

        <Opt>
          <FaMotorcycle />
          <span>Delivery: </span>
          <p>35m - 1h:40m</p>
          <span>Entrega: </span>
          <p>A partir de R$ 3,00</p>
        </Opt>
      </CardMeio>

      <LinhaMeio />

      <ContainerCarrinho>
        {/* <img src={carImg} alt='Carrinho de compras' /> */}
        <FaShoppingCart />
        <span>5 Produtos no carrinho</span>
        <p>R$ 349,80</p>
      </ContainerCarrinho>
      {/*  */}
    </Container>
  );
}

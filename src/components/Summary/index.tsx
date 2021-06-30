import storeImg2 from '../../assets/storeImg2.png';
import clockImg from '../../assets/clock.png';
import carImg from '../../assets/carStore.png';
import {
  Container,
  Opt,
  ContainerCarrinho,
  ContainerInicio,
  CardMeio,
} from './styles';

export function Summary() {
  return (
    <Container>
      <img src={storeImg2} alt='Imagem da loja' />
      {/*  */}
      <CardMeio>
        {/* div parte de cima */}
        <ContainerInicio>
          <strong>Pet Friends Acessories</strong>
          <img src={clockImg} alt='Imagem relógio' />
          <p>ABERTO AGORA</p>
        </ContainerInicio>
        {/* fim da div parte de cima */}

        <p>
          Avenida Rio Grande do Sul,1520,Estados | 58030-021 | João Pessoa - PB
        </p>

        <Opt>
          <span>Delivery: </span> <p>35m - 1h:40m</p>
          <span>Entrega: </span>
          <p>A partir de R$ 3,00</p>
        </Opt>
      </CardMeio>

      <ContainerCarrinho>
        <img src={carImg} alt='Carrinho de compras' />
        <span>5 Produtos no carrinho</span>
        <p>R$ 349,80</p>
      </ContainerCarrinho>
      {/*  */}
    </Container>
  );
}

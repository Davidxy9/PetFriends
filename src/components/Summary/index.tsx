import storeImg2 from '../../assets/storeImg2.png';
import clockImg from '../../assets/clock.png';
import { Container } from './styles';

export function Summary() {
    return (
        <Container>
        <img src={storeImg2} alt="Imagem da loja" />
        <strong>Pet Friends Acessories</strong>
        <img src={clockImg} alt="Imagem relógio" />
        <h3>ABERTO AGORA</h3>
        <p>Avenida Rio Grande do Sul,1520,Estados | 58030-021 | João Pessoa - PB</p>
        <span>Delivery: </span>
        <p>35m - 1h:40m</p>
        <span>Entrega: </span>
        <p>A partir de R$ 3,00</p>
        </Container>
    )
}
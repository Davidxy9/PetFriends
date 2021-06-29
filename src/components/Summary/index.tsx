import storeImg2 from '../../assets/storeImg2.png';
import clockImg from '../../assets/clock.png';
import carImg from '../../assets/carStore.png';
import { Container, Content } from './styles';

export function Summary() {
    return (
        <Container>
            <Content>
            <img src={storeImg2} alt="Imagem da loja" />
            <div>
                <strong>Pet Friends Acessories</strong>
                <img src={clockImg} alt="Imagem relógio" />
            </div>
            <h3>ABERTO AGORA</h3>
            
            <p>Avenida Rio Grande do Sul,1520,Estados | 58030-021 | João Pessoa - PB</p>
            </Content>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
            <div style={{display: 'flex'}}>
            <span>Delivery: </span>
            {' '}
            <p>35m - 1h:40m</p>
            </div>
            <div style={{display: 'flex'}}>
            <span>Entrega: </span>
            <p>A partir de R$ 3,00</p>
</div>
</div>
            <img src={carImg} alt="Carrinho de compras" />
            <span>5 Produtos no carrinho</span>
            <p>Valor</p>

        
        </Container>
    )
}
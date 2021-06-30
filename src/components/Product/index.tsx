import { Container, Content, Separator } from "./styles"
import imgTest from '../../assets/imageTeste.svg';


export function Product() {


    return (
        <Separator>
            <Container>

                <input placeholder="O que você procura?">


                </input>


            </Container>
            <Content>
                <div>
                    <img src={imgTest} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </div>

                <div>
                    <img src={imgTest} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </div>

                <div>
                    <img src={imgTest} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </div>

                <div>
                    <img src={imgTest} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </div>

                <div>
                    <img src={imgTest} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </div>

            </Content>
        </Separator>
    );
}

/*
    function handleSearchProduct(){

    }

*/
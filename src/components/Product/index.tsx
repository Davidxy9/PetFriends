import { Container, Content, Separator } from "./styles"
import imgTest2 from '../../assets/imageTeste2.png';
import { useEffect } from "react";
import { api } from "../../services/api";

export function Product() {

    useEffect(() => {
        api.get('products')
            .then(response => console.log(response.data))
    },[]);

    return (
        <Separator>
            <Container>

                <input placeholder="O que você procura?">


                </input>


            </Container>
            <Content>
                <button>
                    <img src={imgTest2} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </button>

                <button>
                    <img src={imgTest2} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </button>

                <button>
                    <img src={imgTest2} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </button>

                <button>
                    <img src={imgTest2} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </button>

                <button>
                    <img src={imgTest2} alt="Imagem provisória" />
                    <strong>Shampoo Tradicional I Love Pet 5 Litros</strong>
                </button>

            </Content>
        </Separator>
    );
}

/*
    function handleSearchProduct(){

    }

*/
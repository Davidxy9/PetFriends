import { Container, Content, Separator } from "./styles"
import Modal from 'react-modal';
import imgTest2 from '../../assets/imageTeste2.png';
import { useEffect, useState } from "react";
import { api } from "../../services/api";



export function Product() {
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

    useEffect(() => {
        api.get('products')
            .then(response => console.log(response.data))
    },[]);

    function handleOpenProductModal() {
        setIsAddProductModalOpen(true);
    }

    function handleCloseProductModal() {
        setIsAddProductModalOpen(false);
    }

  


    return (
        <Separator>
            <Container>

                <input placeholder="O que você procura?">


                </input>

                Sugestões do vendedor
            </Container>
            <Content>
              
                <button
                    onClick={handleOpenProductModal}
                >
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

                <Modal 
                    isOpen={isAddProductModalOpen}
                    onRequestClose={handleCloseProductModal}
                >
                    <img src={imgTest2} alt="Imagem provisória" />
                    <h2>Shampoo</h2>
                </Modal>
            </Content>
        </Separator>
    );
}

/*
    function handleSearchProduct(){

    }

*/
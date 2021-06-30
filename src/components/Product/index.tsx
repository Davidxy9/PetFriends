import { Container, Content, Separator } from "./styles"
import Modal from 'react-modal';
import imgTest2 from '../../assets/imageTeste2.png';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Toys } from "./Toys";

interface ProductsData {
    id: number;
    amount: number;
    img: string;
    title: string;
    type: string;
    off?: string;
}

export function Product() {
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [listProducts, setListProducts] = useState<ProductsData[]>([]);

    useEffect(() => {
        api.get('products')
            .then(response => setListProducts(response.data))
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
                {listProducts.map(product => (
                    <button
                    key={product.id}
                    onClick={handleOpenProductModal}
                     >
                        <img src={product.img} alt="Imagem provisória" />
                        <strong>{product.title}</strong>
                        <p>{new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.amount)}
                            
                        </p>
                    </button>
                ))}
               
                

                <Modal 
                    isOpen={isAddProductModalOpen}
                    onRequestClose={handleCloseProductModal}
                >
                    <img src={imgTest2} alt="Imagem provisória" />
                    <h2>Shampoo</h2>
                </Modal>
            </Content>
            
            <Toys />

        </Separator>
    );
}

/*
    function handleSearchProduct(){

    }

*/
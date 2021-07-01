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

interface dataPropsTitle {
    title?: string;
    img?: string;
    id?: number;
    off?: string;
    amount?: number;
    type?: string;
}

export function Product() {
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [listProducts, setListProducts] = useState<ProductsData[]>([]);
    const [dataSaveTitle, setDataSaveTitle] = useState({} as dataPropsTitle);
    const [dataSaveImg, setDataSaveImg] = useState();


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

  
    function testeId(id: number) {
        const finalmenteID = listProducts.find(product => product.id === id)
        const vai = {
            title: finalmenteID?.title,
            img: finalmenteID?.img,
            amount: finalmenteID?.amount,
            off: finalmenteID?.off,
            type: finalmenteID?.type,
            id: finalmenteID?.id

        }

        setDataSaveTitle(vai)
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
                    onClick={() => testeId(product.id)}
                     >
                        <img src={product.img} alt="Imagem provisória" />
                        <strong>{product.title}</strong>
                        <p>{new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.amount)}
                            
                            <button onClick={handleOpenProductModal}>MIAU</button>
                        </p>
                    </button>
                ))}
               
                

                <Modal 
                    isOpen={isAddProductModalOpen}
                    onRequestClose={handleCloseProductModal}
                >
                    <img src={dataSaveTitle.img} alt="Imagem provisória" />
                    <h2>{dataSaveTitle.title}</h2>
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
import { Container, Content, Separator } from "./styles"
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { BsSearch } from 'react-icons/bs';

import { Toys } from "./Toys";

interface ProductsData {
    id: number;
    amount: number;
    img: string;
    title: string;
    type: string;
    off?: string;
}

interface IdataSaveForModal {
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
    const [dataSaveForModal, setDataSaveForModal] = useState({} as IdataSaveForModal);


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

  
    function getProduct(id: number) {
        const searchProductSelected = listProducts.find(product => product.id === id)
        const objectsForModal = {
            title: searchProductSelected?.title,
            img: searchProductSelected?.img,
            amount: searchProductSelected?.amount,
            off: searchProductSelected?.off,
            type: searchProductSelected?.type,
            id: searchProductSelected?.id

        }

        setDataSaveForModal(objectsForModal)
    }


    return (
        <Container>
      <Separator>
        <BsSearch />
        <input placeholder='O que você procura?' />
      </Separator>

            <Content>
                {listProducts.map(product => (
                    <button
                    key={product.id}
                    onClick={() => getProduct(product.id)}
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
                    <img src={dataSaveForModal.img} alt="Imagem provisória" />
                    <h2>{dataSaveForModal.title}</h2>
                </Modal>
            </Content>
            
            <Toys />

        </Container>
    );
}

/*
    function handleSearchProduct(){

    }

*/
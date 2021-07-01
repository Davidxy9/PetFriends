import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container } from './styles';

interface ToysData {
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

export function Toys() {
    const [listToys, setListToys] = useState<ToysData[]>([]);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [dataSaveForModal, setDataSaveForModal] = useState({} as IdataSaveForModal);


    useEffect(() => {
        api.get('toys')
            .then(response => setListToys(response.data))
    },[]);

    function handleOpenProductModal() {
        setIsAddProductModalOpen(true);
    }
    
    function handleCloseProductModal() {
        setIsAddProductModalOpen(false);
    }

    function getProduct(id: number) {
        const searchProductSelected = listToys.find(product => product.id === id)
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


    return(
        <Container>
        {listToys.map(product => (
            <button
                key={product.id}
                onClick={() => getProduct(product.id)}

             >
                <img src={product.img} alt="Imagem" />
                <strong>{product.title}</strong>
                <span>{product?.off}</span>
                <p>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(product.amount)}
                    
                    <button onClick={handleOpenProductModal}>Comprar</button>
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
        </Container>
    );
}
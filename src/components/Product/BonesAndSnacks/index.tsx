import { useContext, useEffect, useState } from "react";
import Modal from 'react-modal';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { ProductContext } from "../../../contexts/ProductContext";
import { api } from "../../../services/api";
import { Container, ContainerModal, Content } from "./styles";

interface BonesAndSnacksData {
    id: number
    amount: number;
    img: string;
    title: string;
    type: string;
    off?: string;
    description: string;
}

interface IdataSaveForModal {
    title?: string;
    img?: string;
    id?: number;
    off?: string;
    amount?: number;
    description?: string;
}

export function BonesAndSnacks() {
    const [listBonesAndSnacks, setListBonesAndSnacks] = useState<BonesAndSnacksData[]>([]);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [dataSaveForModal, setDataSaveForModal] = useState({} as IdataSaveForModal);
    //transições envolvendo carrinho
    const [productQuantity, setProductQuantity] = useState(0);
    //contexto
    const {productCart, setProductCart, setProductValue} = useContext(ProductContext);

    useEffect(() => {
        api.get('/bones-and-snacks')
            .then(response => setListBonesAndSnacks(response.data))
    },[])

    function handleOpenProductModal() {
        setIsAddProductModalOpen(true);
    }

    function handleCloseProductModal() {
        setProductQuantity(0);

        setIsAddProductModalOpen(false);


    }


    function getProduct(id: number) {
        const searchProductSelected = listBonesAndSnacks.find(product => product.id === id)
        const objectsForModal = {
            title: searchProductSelected?.title,
            img: searchProductSelected?.img,
            amount: searchProductSelected?.amount,
            off: searchProductSelected?.off,
            type: searchProductSelected?.type,
            id: searchProductSelected?.id,
            description: searchProductSelected?.description

        }

        setDataSaveForModal(objectsForModal)
    }

    function handleAddProduct() {
        const getAmountProduct = dataSaveForModal.amount
        
        
        setProductValue(Number(getAmountProduct))

        setProductCart(productQuantity + productCart);


    }

    function handleMoreQuantityProduct() {
        setProductQuantity(productQuantity+1)
    }

    function handleLessQuantityProduct() {
        if(productQuantity <= 0) return;
        setProductQuantity(productQuantity-1)

    }

    console.log(productQuantity);

    return (
        <Container>

            <Content>
                {listBonesAndSnacks.map(product => (
                    <button
                        key={product.id}
                        onClick={() => getProduct(product.id)}
                    >
                        <img src={product.img} alt="Imagem provisória" />
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
                    <ContainerModal>
                        <img src={dataSaveForModal.img} style={{width:'400px', height: '400px'}}alt="Imagem provisória" />
                        <div>
                            <h1>{dataSaveForModal.title}</h1>
                            <p>{dataSaveForModal.description}</p>
                            <div>
                                <button onClick={handleLessQuantityProduct}><FiMinusCircle/></button>
                                <span>{productQuantity}</span>
                                <button onClick={handleMoreQuantityProduct}><FiPlusCircle/></button>
                            </div>
                        </div>
                        <button onClick={handleAddProduct}>Adicionar</button>
                    </ContainerModal>
                </Modal>
            </Content>


        </Container>
    );
}
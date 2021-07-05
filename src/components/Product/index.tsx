import { Container, ContainerModal, Content, Separator } from "./styles"
import Modal from 'react-modal';
import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { BsSearch } from 'react-icons/bs';
import { FiPlusCircle,FiMinusCircle  } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg'


import { Toys } from "./Toys";
import { Collars } from "./Collars";

import { ProductContext } from "../../contexts/ProductContext";
import { BedsAndHouses } from "./BedsAndHouses";
import { BonesAndSnacks } from "./BonesAndSnacks";

interface ProductsData {
    id: number;
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



export function Product() {
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [listProducts, setListProducts] = useState<ProductsData[]>([]);
    const [dataSaveForModal, setDataSaveForModal] = useState({} as IdataSaveForModal);
    const [productSearch, setProductSearch] = useState('');
    //transições envolvendo carrinho
    const [productQuantity, setProductQuantity] = useState(0);
    //contexto
    const {productCart, setProductCart, setProductValue} = useContext(ProductContext);
    useEffect(() => {
        api.get('products')
            .then(response => setListProducts(response.data))
    }, []);

    

    function handleOpenProductModal() {
        setIsAddProductModalOpen(true);
    }

    function handleCloseProductModal() {
        setProductQuantity(0);

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
            id: searchProductSelected?.id,
            description: searchProductSelected?.description

        }

        setDataSaveForModal(objectsForModal)
    }

    function handleAddProduct() {
        const getAmountProduct = dataSaveForModal.amount
        
        
        setProductValue(Number(getAmountProduct))

        setProductCart(productQuantity + productCart)


    }

    function handleMoreQuantityProduct() {
        setProductQuantity(productQuantity+1)
    }

    function handleLessQuantityProduct() {
        if(productQuantity <= 0) return;
        setProductQuantity(productQuantity-1)

        if(productCart <= 0) return;
        setProductCart(productCart - 1)


    }

    console.log(productQuantity);

    return (
        <Container>
            <Separator>
                <BsSearch style={{ background: 'white' }} />

                <input
                    placeholder='O que você procura?'
                    value={productSearch}
                    onChange={(event) => setProductSearch(event.target.value)}
                />
            </Separator>

            <Content>
                {listProducts.map(product => (
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
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                >
                    <ContainerModal>
                        <button className="button-close" type="button" onClick={handleCloseProductModal}> 
                            <CgClose size={30} />

                        </button>
                        <img src={dataSaveForModal.img} style={{width:'400px', height: '400px'}}alt="Imagem provisória" />
                        <div>
                            <h1>{dataSaveForModal.title}</h1>
                            <p>{dataSaveForModal.description}</p>
                            <div className="div-plus-and-less">
                                <button onClick={handleLessQuantityProduct}><FiMinusCircle/></button>
                                <span>{productQuantity}</span>
                                <button onClick={handleMoreQuantityProduct}><FiPlusCircle/></button>
                            </div>
                        </div>
                        <button className="button-add-product" onClick={handleAddProduct}>Adicionar</button>
                    </ContainerModal>
                </Modal>
            </Content>

            <Toys />
            <BedsAndHouses />
            <Collars />
            <BonesAndSnacks />
            

        </Container>
    );
}

/*
    function handleSearchProduct(){

    }

*/
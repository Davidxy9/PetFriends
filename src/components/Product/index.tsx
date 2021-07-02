import { Container, ContainerModal, Content, Separator } from "./styles"
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { BsSearch } from 'react-icons/bs';
import { FiPlusCircle,FiMinusCircle  } from 'react-icons/fi';


import { Toys } from "./Toys";

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
    const [productValue, setProductValue] = useState(0);
    const [productCart, setProductCart] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);

    useEffect(() => {
        api.get('products')
            .then(response => setListProducts(response.data))
    }, []);

    

    function handleOpenProductModal() {
        setIsAddProductModalOpen(true);
    }

    function handleCloseProductModal() {
        setIsAddProductModalOpen(false);

        setProductQuantity(0)

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
        const miau = dataSaveForModal.amount
        
        
        setProductValue(Number(miau))



    }

    function handleMoreQuantityProduct() {
        let outroMiau = productQuantity;

        outroMiau++;
        setProductQuantity(outroMiau)

        addInProductQuantity()
    }

    function addInProductQuantity(){
        let resolveObug = productQuantity;
        
        resolveObug++;
        setProductCart(resolveObug);

    }
    


    function handleLessQuantityProduct() {
        let outroMiau2 = productQuantity;

        outroMiau2--;
        setProductQuantity(outroMiau2)
        
    }

    console.log(productValue);
    console.log(productQuantity);
    console.log(productCart);


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

            <Toys />

        </Container>
    );
}

/*
    function handleSearchProduct(){

    }

*/
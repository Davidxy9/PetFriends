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


export function Toys() {
    const [listToys, setListToys] = useState<ToysData[]>([]);

    useEffect(() => {
        api.get('toys')
            .then(response => setListToys(response.data))
    },[]);

    return(
        <Container>
        {listToys.map(product => (
            <button
                key={product.id}
             >
                <img src={product.img} alt="Imagem" />
                <strong>{product.title}</strong>
                <p>De {product.off}</p>
                <p>{new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(product.amount)}
                    
                </p>
            </button>
        
        ))}
        </Container>
    );
}
import { createContext, useState, ReactNode } from "react";

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductContext = createContext(0);

export function ProductProvider({children}: ProductProviderProps) {
    const [productCart, setProductCart] = useState(0);

    

    return(
        <ProductContext.Provider value={Number(productCart)}>
            {children}
        </ProductContext.Provider>
    );
}
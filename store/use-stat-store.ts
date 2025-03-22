import { dummyProducts } from "@/lib/data";
import { ProductData } from "@/types/type";
import { create } from "zustand";

interface StatStoreProducts {
    products: ProductData[];
    getProductById: (id: number) => ProductData | undefined;
    cartsProduct: ProductData[];
    addToCart: (product: ProductData) => void;
    removeFromCart : (id : number ) => void
}

export const useStatStore = create<StatStoreProducts>((set, get) => ({
    products: dummyProducts,
    cartsProduct: [],
    getProductById: (id: number) => {
        const { products } = get();
        return products.find(product => product.id === id);
    },
    addToCart: (product: ProductData) => {
        set((state) => ({
            cartsProduct: [...state.cartsProduct, product]
        }));
    },
    removeFromCart : (id : number) =>{
        set((state) => ({
            cartsProduct : state.cartsProduct.filter((p)=>p.id !== id)
        }))
    }
}));
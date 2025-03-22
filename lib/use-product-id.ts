import { useParams } from "next/navigation";

export const useProductId = () =>{
    const params = useParams<{productId : string}>();
    return params.productId;
}
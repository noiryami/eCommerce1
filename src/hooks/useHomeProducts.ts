import { useMemo } from "react";
import useGetProducts from "./useGetProducts";

const useHomeProducts = () => {

  const {productFullInfo,loading,error} = useGetProducts();
  


const randomProudcts = useMemo(() => {
  if (productFullInfo.length === 0) return [];

  const shuffled = [...productFullInfo].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(3, shuffled.length)); // Show max 8 random categories
}, [productFullInfo]);
    

    return { randomProudcts,loading,error };
    
};

export default useHomeProducts;
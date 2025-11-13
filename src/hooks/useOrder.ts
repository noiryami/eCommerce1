import { useEffect,useState } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetOrders, resetOrderStatus } from "@store/orders/ordersSlice"

import type { TProduct } from "@types"

const useOrder = () => {

    const dispatch = useAppDispatch();
  
    const { loading, error, orderList } = useAppSelector((state) => state.orders);
  
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);
    
  
    const viewDetailsHandler = (id: number) => {
      const prouductDetalis = orderList.find(order => order.id === id);
      setShowModal(true);
      const newItem = prouductDetalis?.items ?? [];
      setSelectedProduct(prev=>[...prev,...newItem])
    }
  
    const closeModalHandler = () => {
      setShowModal(false);
      setSelectedProduct([]); 
    }
    useEffect(() => {
      const promise = dispatch(actGetOrders());
  
      return () => {
        promise.abort()
        dispatch(resetOrderStatus())
      };
    }, [dispatch]);
  
    return {loading, error,orderList,showModal,selectedProduct,viewDetailsHandler,closeModalHandler,};
}

export default useOrder
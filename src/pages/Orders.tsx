import useOrder from "@hooks/useOrder"
import { Heading } from "@components/common"
import { Loading } from "@components/feedback"
import { ProductInfo } from "@components/eCommerce"
import { Modal,Table} from "react-bootstrap"

const Orders = () => {
  const {loading, error,orderList,showModal,selectedProduct,viewDetailsHandler,closeModalHandler, } = useOrder();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler} backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
          <Modal.Body>
          {selectedProduct.map((el) => <ProductInfo key={el.id}
          title={el.title} img={el.img} price={el.price} direction="column" quantity={el.quantity} style={{marginBottom:"10px"}}
          />)}
          </Modal.Body>
      </Modal>
      <Heading title="My Orders" />
      <Loading status={loading} error={error} type="table">
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Order number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
            </thead>
            <tbody>
              {orderList.map((el) => (
              <tr key={el.id}>
                <td># {el.id}</td>
                  <td>{el.items.length} item(s){" / "}
                    <span onClick={()=>viewDetailsHandler(el.id)}
                      style={{ textDecoration: "underline", cursor: "pointer  " }}
                  >Product Details</span></td>
                <td>{el.subTotal.toFixed(2)}</td>
              </tr>
            )) }</tbody>
          
        </Table>
      </Loading>
    </>
  )
}

export default Orders
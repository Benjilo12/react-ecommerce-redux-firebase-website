import "./cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  //accessing the cartAction from redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  //acessing the totalAmount
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="cart">
      <CommonSection title="Shopping cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      {/* table header */}
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* we take the cartItems 4rm and loop over it */}
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
                <p className="fs-6 mt-2">
                  taxes and shipping will be calculted in checkout
                </p>
                <div>
                  <button className="buy_btn w-100">
                    <Link to="/shop" style={{ textDecoration: "none" }}>
                      Continue Shopping
                    </Link>
                  </button>
                  <button className="buy_btn w-100 mt-2">
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
                      Procced to checkout
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

//this is the <Tr />compnent
const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <motion.td whileTap={{ scale: 1.1 }} onClick={deleteProduct}>
        <DeleteIcon className="icon" />
      </motion.td>
    </tr>
  );
};

export default Cart;

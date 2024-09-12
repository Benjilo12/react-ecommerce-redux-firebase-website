import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "./checkout.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Checkout() {
  //accessing state from redux
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name" required />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter your email" required />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="number" placeholder="Phone Number" required />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Street address" required />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="City" required />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal Code" required />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Country" required />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  <span>Subtotal:</span>
                  <span>{totalAmount}</span>
                </h6>
                <h6>
                  Shipping:
                  <br />
                  free shipping<span>0</span>
                </h6>
                <h6>Free shipping</h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn auth_btn w-50 p-2"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "800",
                  }}
                >
                  Place an order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;

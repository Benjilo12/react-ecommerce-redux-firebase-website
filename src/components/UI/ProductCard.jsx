import productImg from "../../assets/images/arm-chair-01.jpg";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import "./ProductCard.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <Col lg="3" md="4">
      <div className="product_item">
        <div className="product_imag">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={productImg}
            alt="chair"
          />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name">
            <Link
              className="product_name h3"
              style={{ textDecoration: "none" }}
              to="/shop/id"
            >
              Modern Armchair
            </Link>
          </h3>
          <span>Chair</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">$299</span>
          <motion.span whileTap={{ scale: 1.2 }} className="product_card-icon">
            <AddIcon />
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;

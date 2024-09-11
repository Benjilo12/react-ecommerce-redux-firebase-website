import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import "./ProductCard.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

function ProductCard({ item }) {
  //we import the cartAction from cartslice to acess it
  const dispatch = useDispatch();

  //HELPS AS TO ADD TO CART
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product added to cart");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_imag">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="chair"
          />
        </div>
        <div className="p-2 product_info">
          <motion.h3 className="product_name" whileTap={{ scale: 1.2 }}>
            <Link
              className="product_name h3"
              style={{ textDecoration: "none", fontSize: "1.2rem" }}
              to={`/shop/${item.id}`}
            >
              {item.productName}
            </Link>
          </motion.h3>
          <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            className="product_card-icon"
            onClick={addToCart}
          >
            <AddIcon className="icon" />
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imgUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;

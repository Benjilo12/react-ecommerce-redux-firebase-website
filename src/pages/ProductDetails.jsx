import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ProductsList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import "./product-details.css";
import { toast } from "react-toastify";

import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ProductDetails() {
  //Tab
  const [tab, setTab] = useState("desc");
  //ratings
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const [rating, setRating] = useState(null);
  //using useParams
  const { id } = useParams();
  // redux
  const dispatch = useDispatch();
  //fxn to find first match id
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  //relatedProducts
  const relatedProducts = products.filter((item) => item.category === category);

  //submit review form
  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted");
  };

  //add to cart
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added to cart");
  };

  //ENSURES that when you click on product details the page scrolls up
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} />
            </Col>
            {/* Ratings */}
            <Col lg="6" className="mt-5">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_ratings d-flex align-items-center gap-5 mb-3 rating_group">
                  <div>
                    <span>
                      <StarIcon style={{ color: "coral" }} />
                    </span>
                    <span>
                      <StarIcon style={{ color: "coral" }} />
                    </span>
                    <span>
                      <StarIcon style={{ color: "coral" }} />
                    </span>
                    <span>
                      <StarIcon style={{ color: "coral" }} />
                    </span>
                    <span>
                      <StarHalfIcon style={{ color: "coral" }} />
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product_price">${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review mt-5">
                  <div className="review_wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li className="mb-4" key={index}>
                          <span>{item.rating} (average rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form_group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form_group d-flex gap-5 align-items-center">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<StarIcon />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<StarIcon />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<StarIcon />
                          </motion.span>

                          <motion.span
                            onClick={() => setRating(4)}
                            whileTap={{ scale: 1.2 }}
                          >
                            4
                            <StarIcon />
                          </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }}>
                            5
                            <StarIcon onClick={() => setRating(5)} />
                          </motion.span>
                        </div>

                        <div className="form_group">
                          <textarea
                            type="text"
                            rows={4}
                            placeholder="Review Message..."
                            ref={reviewMsg}
                            required
                          />
                        </div>
                        <button type="submit" className="buy_btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related_title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;

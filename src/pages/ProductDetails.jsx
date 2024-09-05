import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function ProductDetails() {
  //using useparams
  const { id } = useParams;
  //fxn to find first match id
  const product = products.find((item) => item.id === id);

  const { imgUrl, productsName, price, avgRating, review, description } =
    product;
  return (
    <Helmet>
      <CommonSection />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{productsName}</h2>
                <div className="product_ratings">
                  <div>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarBorderIcon />
                    </span>
                    <span>
                      <StarHalfIcon />
                    </span>
                  </div>
                  <p>({avgRating}ratings)</p>
                </div>

                <span>{price}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;

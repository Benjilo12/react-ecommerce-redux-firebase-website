import Helmet from "../components/Helmet/Helmet";
import "./hstyle.css";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

function Home() {
  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <>
        <div className="hero_section">
          <Container>
            {/* Row makes it flex, col divides it */}
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <p className="hero_subtitle">Trending product in {year}</p>
                  <h2>Make Your Interior Minimalistic & Modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum aut quasi placeat facere obcaecati eius minus in
                    dolore illum corporis.
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                    <Link className="buy_btn" to="/shop">
                      Shop Now
                    </Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero_img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Services />
        <section className="trending_products">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Trending Products</h2>
              </Col>
              <ProductList />
            </Row>
          </Container>
        </section>
      </>
    </Helmet>
  );
}

export default Home;

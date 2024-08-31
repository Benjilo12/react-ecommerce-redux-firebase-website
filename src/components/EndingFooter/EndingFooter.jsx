import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./EndingFooter.css";

function EndingFooter() {
  const year = new Date().getFullYear(); // Fix this line to call getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <img src={logo} alt="logo" style={{ background: "white" }} />
              </div>
              <div>
                <h1 className="text-white">Yoomart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              possimus quasi sunt voluptatum quos ut necessitatibus et alias
              placeat molestias.
            </p>
          </Col>
          <Col lg="3" className="liststyles">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ul className="liststyles">
                <li className="ps-0 border-0 mt-2">
                  <Link to="#">Mobile Phones</Link>
                </li>
                <li className="ps-0 border-0 mt-2">
                  <Link to="#">Modern Sofa</Link>
                </li>
                <li className="ps-0 border-0 mt-2">
                  <Link to="#">Arm Chair</Link>
                </li>
                <li className="ps-0 border-0 mt-2">
                  <Link to="#">Smart Watches</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ul>
                <li className="ps-0 border-0 mt-2">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="ps-0 border-0 mt-2">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="ps-0 border-0 mt-2">
                  <Link to="/login">Login</Link>
                </li>
                <li className="ps-0 border-0 mt-2">
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>
              <ul>
                <li className="ps-0 border-0 d-flex mt-2">
                  <span>
                    <FmdGoodIcon
                      style={{ color: "	#DAA520", marginRight: "6px" }}
                    />
                  </span>
                  <p>123, Accra-Amasaman</p>
                </li>

                <li className="ps-0 border-0 d-flex mt-2">
                  <span>
                    <PhoneAndroidIcon
                      style={{ color: "	#DAA520", marginRight: "6px" }}
                    />
                  </span>
                  <p>+233 506472535</p>
                </li>

                <li className="ps-0 border-0 d-flex mt-2">
                  <span>
                    <MailOutlineIcon
                      style={{ color: "	#DAA520", marginRight: "6px" }}
                    />
                  </span>
                  <p>benjamindarteyy@gmail.com</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">
              Copyright@{year} developed by Benjamin prymz
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default EndingFooter;

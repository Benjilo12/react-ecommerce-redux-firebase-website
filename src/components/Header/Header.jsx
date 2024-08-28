import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import "./style.css";

const nav_link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <h1>Yoomart</h1>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : "nav_item"
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="Fav_icon">
                <FaRegHeart />
                <span className="badge">1</span>
              </span>
              <span className="cart_icon">
                <MdOutlineShoppingBag />
                <span className="badge">1</span>
              </span>
              <span>
                <img src={userIcon} alt="" />
              </span>
            </div>
            <div className="mobile_menu">
              <span>
                <IoMenu />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

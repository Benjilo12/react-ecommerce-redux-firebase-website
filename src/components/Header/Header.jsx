import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import "./style.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const headerRef = useRef(null);
  //acessing the totalquantity to show at the top of cart icon
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  //using usenavigate to navigate to cart
  const navigate = useNavigate();

  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <Link to="/" style={{ textDecoration: " none" }}>
                  <h1>Yoomart</h1>
                </Link>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
              <span className="cart_icon" onClick={navigateToCart}>
                <MdOutlineShoppingBag />
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <img src={userIcon} alt="" />
              </span>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <IoMenu />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

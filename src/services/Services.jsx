import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RefreshIcon from "@mui/icons-material/Refresh";
import PaymentsIcon from "@mui/icons-material/Payments";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const serviceData = [
  {
    icon: <LocalShippingIcon />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <RefreshIcon />,
    title: "Easy Returns",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <PaymentsIcon />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: " Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];

const styles = {
  service_item: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    columnGap: "0.7rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  span: {
    fontSize: "2.2rem",
    background: "var(--primary-color)",
    padding: "10px",
    borderRadius: "100%",
    color: "#fff",
    fontWeight: "400 !important",
  },
  title: {
    color: "var(--primary-color)",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  description: {
    fontSize: "0.9rem",
    marginTop: "5px",
    color: "#222",
  },
};

function Services() {
  console.log("Services component is rendering");
  return (
    <section className="">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ ...styles.service_item, background: item.bg }}
              >
                <span style={styles.span}>{item.icon}</span>
                <div>
                  <h3 style={styles.title}>{item.title}</h3>
                  <p style={styles.description}>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;

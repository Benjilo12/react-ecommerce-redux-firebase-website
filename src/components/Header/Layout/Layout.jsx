import Header from "../Header";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Routers from "../../../routers/Routers";
function Layout() {
  return (
    <>
      <Header />
      <Box>
        <Routers />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;

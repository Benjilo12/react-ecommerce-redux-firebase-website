import Header from "../Header";

import Routers from "../../../routers/Routers";
import EndingFooter from "../../EndingFooter/EndingFooter";

function Layout() {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <EndingFooter />
    </>
  );
}

export default Layout;

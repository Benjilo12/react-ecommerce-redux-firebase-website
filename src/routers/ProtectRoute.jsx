import useAuth from "../custom-hooks/useAuth";
import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="login" />;
}

export default ProtectRoute;

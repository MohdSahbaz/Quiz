import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UserProtected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("isUserAuthenticate");

    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return <Outlet />;
};

export default UserProtected;

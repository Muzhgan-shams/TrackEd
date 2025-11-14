import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  return <></>;
};

export default LogOut;

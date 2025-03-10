import { useEffect } from "react";
import { useNavigate } from "react-router";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <div className="absolute top-10 left-1/3 text-2xl">Logging in...</div>;
};

export default SuccessPage;

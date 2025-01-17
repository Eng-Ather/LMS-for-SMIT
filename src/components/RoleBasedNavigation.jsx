//src/component/RoleBaesdNavigation
import { useNavigate } from "react-router-dom"; 
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/context";

const RoleBasedNavigation = () => {
  const navigate = useNavigate();
  const { user, token, session } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      
      navigate("/");
      return;
    }

    if (user) {
      switch (user.role) {
        case "teacher":
          navigate("/teacher");
          break;
        case "student":
          navigate("/student");
          break;
        case "admin":
          navigate("/admin");
          break;
        default:
          console.log("Redirecting to main page.");
          navigate("/"); 
      }
    }
  }, [user, navigate]); 

  return <></>; 
};

export default RoleBasedNavigation;


import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/dashboard");
    }
    if (!authToken) {
      navigate("/register");
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/register");
  };
  

  return (

   <div className="vh-100 d-flex justify-content-center align-items-center">
   <div className="dashboard">
   <h1 className="fw-bold">Dashboard</h1>
   <Link to='/userdetail' ><Button className="fw-bold">Users Detail</Button></Link> / &nbsp;
    <Button className="fw-bold" onClick={logout}>Log out</Button> 
   </div>
   </div>
  );
}
export default Dashboard;

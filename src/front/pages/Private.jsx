import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { privateCheck } from "../services/BackendServices";

export const Private = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  const [user, setUser] = useState(null)
  const checkToken = async () => {
    const response = await privateCheck()
    if (response){
      setUser(response)
      setLoading(false)
    }
    else {
      navigate("/")
    }
  } 


  useEffect(() => {
    if (!localStorage.getItem("token")){
      setTimeout(() => {

        navigate("/")
      }, 1000)
    } else {
      checkToken()
      }

  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return <h1>Hola Usuario</h1>;
};

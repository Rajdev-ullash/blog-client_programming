import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { infocontext } from "../../../App";

const Navbar = () => {
  const [logged, setLogged] = useContext(infocontext);
  console.log(logged);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto pe-md-5">
              <li className="nav-item">
                <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
              </li>
              {
                logged && <li className="nav-item">
                <Link className="nav-link text-dark" to="/dashboard">Dashboard</Link>
              </li> 
              }
              {
                logged ? <p>{logged}</p> : <li className="nav-item">
                <Link className="nav-link text-dark" to="/login">Login</Link>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

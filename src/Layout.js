import { Link, Outlet } from "react-router-dom";
import logofinal from './images/Accord-Logo-blue.png';
import { useState } from "react";

const Layout = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(prevState => !prevState);
  };

  return (
    <>
      <head>
        <link rel="stylesheet" href="./style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>

      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={toggleResponsive}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="./home"><img className="logo" src={logofinal} alt="Logo"></img></a>
          <div className={`collapse navbar-collapse ${isResponsive ? 'show' : ''}`} id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className='m-4' to="home">Home</Link>
              </li>
              <li class="nav-item">
                <Link className='m-4' to="rooms">Rooms</Link>
              </li>
              <li class="nav-item">
                <Link className='m-4' to="avail">Availables</Link>
              </li>
              <li class="nav-item">
                <Link className='m-4' to="contact">Contact</Link>
              </li>
            </ul>
            <button className="btnsign"><a className='m-4' href="/login">LogIn</a>
            </button>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </body>
  </>
  );
};

export default Layout;
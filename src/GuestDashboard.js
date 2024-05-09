import { useSelector, useDispatch } from "react-redux";
import { guestlogout } from "./guestloginSlice";
import { useNavigate } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";

const GuestDashboard = () => {
  const guestName = useSelector((state) => state.guestlogin.guestuser);
  const myDispatch = useDispatch();
  const myNav = useNavigate();
  const guestLogout = () => {
    myDispatch(guestlogout());
    myNav("/home");

  }
  return (
    <>
      <div id="stuinfo">
       <center> Welcome {guestName} !</center>
      </div>
      <div class="d-flex">
        <div class="sidebar d-block">
          <Link to="userpage"> Student Profile </Link>
          <Link to="stucomplain"> Write Your Complain </Link>
          <Link to="sturesponse"> Display Response </Link>
          <Link to="stupassword"> Change Password</Link>
          <Link to="/home" onClick={guestLogout}>Logout</Link>
        </div>

        <div class="content1">
         <center>
         <Outlet />
         </center>
        </div>
      </div>
    </>
  );
}
export default GuestDashboard;
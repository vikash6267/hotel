import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const adminName = useSelector((state) => state.adminuser.adminname);
  const myDispatch = useDispatch();
  const myNav = useNavigate();
  useEffect(() => {
    if (adminName == "") {
      myNav("/");
    }

  }, []);
  const adminLogout = () => {
    myDispatch(adminlogout());
    myNav("/");
  }

  const [valuerun, setValuerun] = useState(0);
  const [valuerun1, setValuerun1] = useState(0);
  const [valuerun2, setValuerun2] = useState(0);

  useEffect(() => {
    if (valuerun < 120) {
      const timeoutId = setTimeout(() => {
        setValuerun((count) => count + 1);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
    if (valuerun1 < 90) {
      const timeoutId = setTimeout(() => {
        setValuerun1((count) => count + 1);
      }, 0.2);
      return () => clearTimeout(timeoutId);
    }
    if (valuerun2 < 20) {
      const timeoutId = setTimeout(() => {
        setValuerun2((count) => count + 1);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  });





  const [myData, setMyData] = useState([]);
  const [newdata, setNewData] = useState([]); // Initialize newdata with an empty array

  const loadData = () => {
    let url = "http://localhost:4000/guests";
    axios.get(url).then((res) => {
      setMyData(res.data);
    });
  }
  useEffect(() => {
    loadData();

  }, []
  );

  const guestUsers = myData.map((key) => (
    <tr>
      <td>{key.id}</td>
      <td>{key.name}</td>
      <td>{key.email}</td>
      <td>{key.number}</td>

    </tr>
  ));

  return (
    <>

      <div className="admindash">
        {/* <h1 className="h1"> Welcome {adminName}!</h1> */}
        <div class="d-flex">
          <div id="adminmenu">
            <ul>
              <li><h4 className="h4">Welcome {adminName}</h4></li>
              <hr />
              <li><Link to='/Admindashboard'><i className='bx bxs-dashboard'></i>Dashboard</Link></li>
              <hr />
              <li><Link to='/roomm'><i class='bx bxs-bed' ></i>Rooms</Link></li>
              <hr />
              <li><Link to='/bookings'><i class='bx bx-calendar-check'></i>Bookings</Link></li>
              <hr />
              <li><Link to='/messsage'><i class='bx bxs-chat'></i>Messages</Link></li>
              <hr />
              <li><Link to='/settings'><i class='bx bxs-cog'></i>Settings</Link></li>
              <br />
              <li><Link to="/home" onClick={adminLogout}>Logout</Link></li>
            </ul>
          </div>
          <div className='container'>
            <div class="row">
              <div class="col">
                <h3 className='h3'>Rooms</h3>
                <h5 id="run">{valuerun}</h5> <i class='bx bxs-bed' />
              </div>
              <div class="col">
                <h3 className='h3'>Bookings</h3>
                <h5 id="run1">{valuerun1}</h5>
                <i class='bx bx-calendar-check' />
              </div>
              <div class="col">
                <h3 className='h3'>Cancellation</h3>
                <h5 id="run3">{valuerun2}</h5>
                <b><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
                  <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                </svg></b>
              </div>
            </div>
            <div className='container guestuser'>
              <h1>Guest</h1>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {guestUsers}
                </tbody>
              </table>
            </div>
            




          </div>
        </div>



      </div >
      <Outlet />




    </>
  );
}
export default AdminDashboard;
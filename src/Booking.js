import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Booking = () => {


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
  const [myData, setMyData] = useState([]);
  const [newdata, setNewData] = useState([]); // Initialize newdata with an empty array

  const loadData = () => {
    let url = "http://localhost:4000/Bookings";
    axios.get(url).then((res) => {
      setMyData(res.data);
    });
  }
  useEffect(() => {
    loadData();

  }, []
  );

  const bookingList = myData.map((key) => (
    <tr>
      <td>{key.checkin}</td>
      <td>{key.checkout}</td>
      <td>{key.rooms}</td>
      <td>{key.guest}</td>
    </tr>
  ));
  return (
    <>
      <div className='admindash'>

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


          <div className='container booking'>
            <h1>Bookings</h1>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Checkin</th>
                  <th>Checkout</th>
                  <th>Rooms</th>
                  <th>Guests</th>
                </tr>
              </thead>
              <tbody>
                {bookingList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking;
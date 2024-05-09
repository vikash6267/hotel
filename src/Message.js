import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Message = () => {
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
    let url = "http://localhost:4000/Message";
    axios.get(url).then((res) => {
      setMyData(res.data);
    });
  }
  useEffect(() => {
    loadData();

  }, []
  );

  const messageList = myData.map((key) => (
    <tr>
      <td>{key.id}</td>
      <td>{key.name}</td>
      <td>{key.email}</td>
      <td>{key.msg}</td>
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
            <h1>Guest messages</h1>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {messageList}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}

export default Message;
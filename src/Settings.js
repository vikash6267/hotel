import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Settings = () => {
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
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [renewpass, setReNewpass] = useState("");

  const adminid = useSelector((state) => state.adminuser.adminid);
  console.log(adminid)

  const submitHandle = () => {
    // e.preventdefault();
    let url = ` http://localhost:4000/adminuser/${adminid}`;
    axios.get(url).then((res) => {


      if (res.data.password == oldpass) {
        if (newpass == renewpass) {
          axios.patch(url, { "password": newpass }).then((res) => {
            console.log(res.data.password)
            alert("Password Succesfully Changed !! ");
          });
        }
        else {
          alert("Password Dose not Match!");
        }
      }
      else {
        alert("Your old Password is Incorrect!");
      }
    });
  }
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



          <center>
            <div className="container_settings p-2">
              <h2 class="h2 m-2">Change Your password</h2>
              <br />
              <form className="change-pass">
                <input type="text" className="password" placeholder="Enter Current Password" value={oldpass} name="oldpass" onChange={(e) => { setOldpass(e.target.value) }} />
                <br/>
                <input type="text" className="password" placeholder="Enter New Password" value={newpass} name="newpass" onChange={(e) => { setNewpass(e.target.value) }} />
                <br/>
                <input type="password" className="password" placeholder="Re-Enter New Password" value={renewpass} name="renewpass" onChange={(e) => { setReNewpass(e.target.value) }} />
                <br/>
                <button id="btn" onClick={submitHandle}>Submit</button>
              </form>
            </div>
          </center>
        </div>
      </div>
    </>
  )
}

export default Settings;
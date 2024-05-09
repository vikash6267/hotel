import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import image1 from './images/Ahlobby.jpg';
import image2 from './images/Ahroom2.jpg';
import image3 from './images/Ahvilla.jpg';
import image4 from './images/room.jpg';
import rich from './images/rich.jpg';
import picx from './images/room2.jpg';
const Roomm = () => {
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
                    <div className='container'>
                        <div className='d-flex room'>
                            <div class="card" aria-hidden="true">
                                <img src={image1} class="picadmins" />
                                <div class="card-body">
                                    <h5 class="card-title">Plaza Suite</h5>
                                    <p class="card-text">Whatever,WhateverWhateverWhateverWhatever</p>
                                </div>
                            </div>
                            <div class="card" aria-hidden="true">
                                <img src={image2} class="picadmins" />
                                <div class="card-body">
                                    <h5 class="card-title">Grande Luxury Suite</h5>
                                    <p class="card-text">Whatever,WhateverWhateverWhateverWhatever</p>
                                </div>
                            </div>
                            <div class="card" aria-hidden="true">
                                <img src={image4} class="picadmins" />
                                <div class="card-body">
                                    <h5 class="card-title">Queen Bed</h5>
                                    <p class="card-text">Whatever,WhateverWhateverWhateverWhatever</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex room'>
                            <div class="card" aria-hidden="true">
                                <img src={image3} class="picadmins" />
                                <div class="card-body">
                                    <h5 class="card-title">One King Bed Suite</h5>
                                    <p class="card-text">Whatever,WhateverWhateverWhatever</p>
                                </div>
                            </div>
                            <div class="card" aria-hidden="true">
                                <img src={picx} class="picadmins" />
                                <div class="card-body">
                                    <h5 class="card-title">Comfy Suite</h5>
                                    <p class="card-text">Whatever,WhateverWhateverrWhatever</p>
                                </div>
                            </div>
                            <div class="card" aria-hidden="true">
                                <img src={rich} class="picadmins" />
                                <div class="card-body">
                                    <h5 class="card-title">Presidential Suite</h5>
                                    <p class="card-text">Whatever,WhateverWhateverWhatever</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roomm;

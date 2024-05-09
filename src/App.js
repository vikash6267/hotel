import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Registration from "./Registration";
import LoaderDashboard from "./LoaderDashboard";
import AdminDashboard from "./AdminDashboard";
import Contact from "./Contact";
import Rooms from "./Rooms";
import Login from "./Login";
import Avail from "./Avail";
import Booking from "./Booking";

import Settings from "./Settings";
import Message from "./Message";
import Roomm from "./Roomm";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="avail" element={<Avail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<Login />} />

            <Route path="/guestdashboard" element={<LoaderDashboard />}>
              {/* <Route exact path="userpage" element={<UserPage />} />
              <Route exact path="stucomplain" element={<StudentComplain />} />
              <Route exact path="sturesponse" element={<SeeStuAnswer />} />
              <Route exact path="stupassword" element={<StuPasswordChange />} /> */}
            </Route>

            <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route index element={<AdminDashboard/>}/>
              <Route path="messsage" element={<Message />} />
              <Route path="settings" element={<Settings />} />
              <Route path="bookings" element={<Booking/>}/>
              <Route path="roomm" element={<Roomm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
import { useState, useEffect } from "react";
import axios from "axios";
// import { stulogin } from "./stuloginSlice";
import { guestlogin } from "./guestloginSlice";
import { Link } from "react-router-dom";

let mysno = 0;
const SeeComplain = () => {
  const [mydata, setMydata] = useState([]);
  const [newdata, setNewdata] = useState([]);

  const laodData = () => {
    let url = "http://localhost:4000/stucomplain";
    axios.get(url).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
    let url1 = "http://localhost:4000/guests";
    axios.get(url1).then((res1) => {
      setNewdata(res1.data);
      console.log(res1.data);
    });
  }
  useEffect(() => {
    laodData();
  }, []);

  const ans = mydata.map((key) => {
    mysno++;
    const myGuest = newdata.find((mykey) => mykey.id === key.guestid);
    return (
      <>
        <tfoot bgcolor="transparent">
          <td> {mysno} </td>
          <td> {key.complain} </td>
          <td> {myGuest ? myGuest.name : ""}</td>
          <td> {myGuest ? myGuest.email : " "} </td>
          <td> <Link class="reply" to={"/admindashboard/repans/" + key.id}>Reply to Student</Link></td>
        </tfoot>
      </>
    );
  });
  return (
    <>
      <center>
        <div className="list">
        <h2> Student Complain List</h2>
        <table class="table" align="center" border="1">
          <thead bgcolor="black">
            <td> S.no.</td>
            <td> Student Complain</td>
            <td> Name </td>
            <td> Email </td>
            <td> Reply</td>
          </thead>
          {ans}
        </table>
        </div>
      </center>
    </>
  );
}

export default SeeComplain;
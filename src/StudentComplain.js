import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentComplain = () => {
    const [msg, setMsg] = useState("");

    const guestid = useSelector((state) => state.guestlogin);

    const submitHandle = () => {
        let myguestid = guestid;
        let url = "http://localhost:4000/Contact";
        axios.post(url, { "guestid": myguestid, "msg": msg, "ans": "" }).then((res) => {
            alert("Your complain succesfully Registered!!!");
        });
    }
    return (
        <>
            <div className="contactform">
                <form>
                    <h1 class="h1">Connect with us!</h1>

                    <input className="msg" placeholder="Enter Name" type="text" name="name" value={input.name} onChange={handleInput} required></input>
                    <br />
                    <input className="msg" placeholder="Enter Email" type="email" name="email" value={input.email} onChange={handleInput} required></input>
                    <br />
                    <input className="msg" placeholder="Enter Message" type="text" name="msg" value={input.msg} onChange={handleInput} required></input>
                    <br />
                    <textarea name="stumsg" value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                    <br />
                    <button className="buttonn" id="btn" onClick={submitHandle}> Submit</button>
                </form>
            </div>
            <div className="complain">
                <h4 class="h4"> Register  Your  Complain</h4>
                <div> Enter Your Message :
                    <br />
                   
                </div>
            </div>
        </>
    );
}
export default StudentComplain;
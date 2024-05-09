import { useSelector } from "react-redux";
// import usericon from './images/usericon.png';


const UserPage = () => {
    const guestName = useSelector((state) => state.guestlogin.guestuser);
    return (
        <>
            {/* <center> */}
                <div class="container-fluid profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" color="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                    <br /><br />
                    <br />
                    <h2 class="h2">{guestName}</h2>
                    <br />
                    <br />
                    <p>Sorry for the inconvenience,Please write ur complain,We "ll response as soon as possible.</p>


                </div>
            {/* </center> */}
        </>
    );
}

export default UserPage;
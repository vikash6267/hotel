import { useSelector} from "react-redux";
import Loader from "./Loader";
import GuestDashboard from "./GuestDashboard";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

const LoaderDashboard=()=>
{
    const [isLoading, setIsLoading]= useState(true);
    const guestName=useSelector((state)=>state.guestlogin.guestuser);
    const myNav= useNavigate();

    useEffect(()=>{
         
        if (guestName==null)
        {
            myNav("/"); 
        }
  
    }, []);


    setTimeout(()=>{
       setIsLoading(false);
    }, 2000);
    return(
        <>
       {isLoading ? <Loader/> : <GuestDashboard/>} 
        </>
    );
}
export default LoaderDashboard;
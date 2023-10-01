import React,{useEffect} from "react";
import Navbar from "../components_home/navbar";
import Footer from "../components_home/footer";
import User_body from "./user_profile_body";

function User (){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Dashboard';
      }, []);
    return(
        <div>
            <Navbar/>
            <User_body/>
            <Footer/>
        </div>
    )
}
export default User;
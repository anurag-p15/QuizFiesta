import React from 'react'
import LoginForm from "./login";
import Navbar from "../components_home/navbar";
import Footer from "../components_home/footer";
function Login(){
    return(
    <div>
    <Navbar/>
    <LoginForm/>
    <Footer/>
    </div>
    )
}
export default Login;
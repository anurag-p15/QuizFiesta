import React,{useEffect} from 'react'
import Attempt from './user_attempted_body'
import Footer from '../components_home/footer'
import Navbar from '../components_home/navbar'

function UserAttempt(){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Attempted Quizes ';
      }, []);
    return(
        <div>
            <Navbar/>
            <Attempt/>
            <Footer/>
        </div>
    )
}
export default UserAttempt
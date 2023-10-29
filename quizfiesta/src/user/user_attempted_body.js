import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Attempt(){

    const username = sessionStorage.getItem("lusername");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Fetch data from your MongoDB collection
      axios.get('http://localhost:5000/api/fetch_score/attempt',{
        params: {
            username: username
        }
      }) // You should replace this with your backend API endpoint to fetch data
        .then((response) => {
            console.log(response.data);
            console.log(username);
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);

    

    //   const filteredData = data.filter((item) => item.username === username);
    const filteredData = Array.isArray(data) ? data.filter((item) => item.username === username) : [];
    console.log(filteredData);

    return(
        <div>
        <div className="row">
        <div className="box">
        <a href="/user_profile" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
             <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                Profile Management
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Manage your profile with ease. Customize and make it yours!
                 </p>
             </div>
             </a>
         </div>
         <div className="box">
         <a href="/attempt_quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
                 <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                 Attempt a Quiz
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Ready to put your knowledge to the test? Go ahead, attempt a quiz and embrace the challenge!
                 </p>
             </div>
         </a>
         </div>
         <div className="box">
         <a href="/user_create_quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
                 <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                 Create A Quiz
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Browse your attempted quizzes. Refine your understanding and track your progress, look out for your mistakes and try again!
                 </p>
             </div>
         </a>
         </div>
         <div className="box_selected">
         <a href="/user_attempt_quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
                 <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                 Attempted Quizes
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Browse your attempted quizzes. Refine your understanding and track your progress, look out for your mistakes and try again!
                 </p>
             </div>  
         </a> 
     </div>
     </div>

    {/* Table displaying attempted Quiz */}
    <div>
            <h4>Check out your all Attempted Quizes</h4>
            <table style ={{color: 'white'}}>
                <thead>
                    <tr>
                        {/* <th>Quiz Id</th> */}
                        <th>Catergory id</th>
                        {/* <th>Date of Attempt</th> */}
                        <th>Score</th>
                        {/* <th>Total Marks</th> */}
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.category}</td>
                                <td>{item.score}</td>
                                <td>{item.username}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
     </div>
    )
}
export default Attempt
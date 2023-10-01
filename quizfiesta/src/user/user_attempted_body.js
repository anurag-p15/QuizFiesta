function Attempt(){
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
            <table>
                <thead>
                    <tr>
                        <th>Quiz Id</th>
                        <th>Quiz Name</th>
                        <th>Date of Attempt</th>
                        <th>Marks Obtained</th>
                        <th>Total Marks</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                </tbody>
            </table>
        </div>
     </div>
    )
}
export default Attempt
import React, { useState } from 'react';
function User_body(){
    const [name, setName] = useState('John Doe'); // Replace with user's actual name
    const [email, setEmail] = useState('john@example.com'); // Replace with user's actual email
    const [bio, setBio] = useState('This is my bio.'); // Replace with user's actual bio
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const savePassword = () => {
        // TODO: Implement password change logic here
        alert('Password changed successfully.');
    };
    return(
        <div>
           <div className="row">
           <div className="box_selected">
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
            <a href="/quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
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
            <div className="box">
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

        {/* Profile Dashboard of User */}
    <div className="leadership">
    <div className="row">
      <div className="head-values" style={{color:"black"}}>
        <h4>Your Profile</h4>
      </div>
      <div className="note" style={{color:"black"}}>
        <p>Your profile is always safe with us at QuizFiesta!! Have a look at your details you have filled and if needed you can update them</p>
      </div>
        <div className="leader">
        <div className="leader-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png" alt="leader name"/>
        </div>
        <div className="leader-note">
          <div style={{borderBottom:'3px solid rgb(5, 112, 78)'}}>
            <h5>Name: </h5>
          </div>
          <div><h5>Email Id: </h5>
          </div>
          <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra, nunc quis suscipit dapibus, massa velit 
            vulputate lacus, vitae posuere mauris massa vel magna. Proin posuere placerat diam vitae imperdiet. Donec euismod justo sit amet
             dui viverra sodales. Donec at mauris finibus, rutrum tortor in, ullamcorper libero. Vestibulum vitae velit quis neque cursus cursus. 
             Etiam convallis, massa eu iaculis lobortis, lorem ex fringilla orci, venenatis finibus diam leo vel nisi. Vestibulum eleifend ipsum 
             enim.</p>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
}
export default User_body
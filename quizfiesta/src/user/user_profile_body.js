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
        <div className="personal-dashboard">
            <h2>Personal Dashboard</h2>
            <div className="user-info">
                <h4>Name: {name}</h4>
                <h4>Email: {email}</h4>
                <h4>Bio:</h4>
                <p>{bio}</p>
            </div>
            <div className="password-change">
                <h4>Change Password</h4>
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button onClick={savePassword}>Save Password</button>
            </div>
        </div>
        </div>
    )
}
export default User_body
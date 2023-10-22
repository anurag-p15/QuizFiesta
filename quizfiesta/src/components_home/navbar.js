import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
    return(
        <div>
        <nav className="navbar navbar-expand-md" style={{ paddingLeft: '2%',backgroundColor:"rgb(7, 56, 99)",borderBottom:"15px solid #ee4b00"}}>
      <div className="container-fluid all-show ">
    <a className="navbar-brand" href="#"><img src="https://drive.google.com/uc?id=1LowyOYz1SB7riF__KMAudWtk-uDsKsMz" style={{width:"20%",height:"20%"}}/></a> 
    
    <section className="wrapper">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button onClick={() => navigate('/quiz')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center',marginTop:'10%' }}>QuizSection</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/about')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center',marginTop:'8%' }}>About QuizFiesta</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/login')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center',marginTop:'17%' }}>Login</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/home')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center',marginTop:'17%' }}>Home</button>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={{ fontSize: '16px', textAlign: 'left' }} href="#" id="accountsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</a>
            <ul className="dropdown-menu" aria-labelledby="accountsDropdown" style={{ backgroundColor: "rgb(72, 169, 255)",padding:'5% 5%',margin:'0'}}>
              <li><a className="dropdown-item" href="/user_profile">
                <span>Dashboard</span></a></li>
              <li><a className="dropdown-item" href="/user_attempted_quiz" >Attempted Quiz</a></li>
              <li><a className="dropdown-item" href="/attempt_quiz" >Attempt Quiz</a></li>
              <li><a className="dropdown-item" href="/user_profile" >
                <span>Logout</span></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>

  </div>
  </nav>
  </div>
    )
}
export default Navbar
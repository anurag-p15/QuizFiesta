import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
    return(
        <div>
        <nav className="navbar navbar-expand-md" style={{ paddingLeft: '2%',backgroundColor:"rgb(0, 138, 138)",borderBottom:"15px solid #ee4b00"}}>
      <div className="container-fluid all-show ">
    <a className="navbar-brand" href="#"><img src="./title.png" style={{width:"100%",height:"100%",}}/></a>
    <section className="wrapper">
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto">
            <li className="nav-item">
            <button onClick={() => navigate('/home')} style={{ textAlign: 'left', fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer',color:'white'}}>QuizSection</button>
            </li>
            <li className="nav-item">
            <button onClick={() => navigate('/home')} style={{ textAlign: 'left', fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer',color:'white'}}>About QuizFiesta</button>
            </li>                
            <li className="nav-item">
            <button onClick={() => navigate('/login')} style={{ textAlign: 'left', fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer',color:'white'}}>Login</button>
            </li>
            <li className="nav-item">
            <button onClick={() => navigate('/home')} style={{ textAlign: 'left', fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}>Home</button>
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
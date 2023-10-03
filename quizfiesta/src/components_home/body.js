function Body(){
    return(
    <div>
        <div className="row" style={{borderBottom:"7px solid white"}}>
                <div className="text" style={{ marginLeft: '5%',marginTop:'10%', marginRight:'5%'}}>
                      <div>
                        <h4>QuizFiesta</h4>
                        <p style={{fontSize:"28px"}}><b>Engage Enrich Explore</b></p>
                      </div>
                      <div>
                        <p style={{textAlign:"left"}}>Embark on a learning adventure with QuizFiesta, where knowledge becomes exciting! Join us in the pursuit of 
                        learning while having fun competing with your friends every step of the way. </p>
                        <p style={{textAlign:"left"}}>With a variety of quizzes to attempt and even the option to create your own, QuizFiesta 
                        is your one-stop destination for both education and entertainment. So why wait? Jump right in, attempt quizzes, 
                        or create your own to enjoy with your friends! </p>
                      </div>
                </div>
                <div className="image">
                    <img src="https://services.kid-ex.com/school-dashboard/static/media/student-dev-card6.f180516b462eb567a619132640345f27.svg"/>
                </div>
                <div style={{marginBottom:'2%'}}>
                <a href="#" className="btn d-block mx-auto" style={{width:'fit-content',backgroundColor:'#1100ff',boxShadow: 'none',color:'white'}}>Login/Register</a>
                </div>
        </div>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#e10000',borderRadius:'10vh'}}>
                <div className="text">
                      <div>
                        <h4>Quizzes Covering the World</h4>
                      </div>
                      <div style={{marginTop:'5%'}}>
                        <p style={{textAlign:"left"}}>Explore knowledge across sectors with our quizzes. Elevate skills through engaging questions, 
                        honing critical thinking. Empowering you for a diverse world. Join us to transcend boundaries!</p></div>
                </div>
                <div className="image">
                    <img src="https://www.analyticsinsight.net/wp-content/uploads/2021/05/Brainstorm.jpg" style={{borderRadius:'5vh',marginTop:'10%'}}/>
                </div>
        </div>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#ff00c8',borderRadius:'10vh'}}>
               <div className="image" style={{float:'left'}}>
                    <img src="https://viveinternetseguro.org/en/wp-content/uploads/sites/3/2019/06/home_tests.png"/>
                </div>
                <div className="text" style={{float:'right'}}>
                      <div>
                        <h4>Practice Quizzes</h4>
                      </div>
                      <div style={{marginTop:'5%'}}>
                        <p style={{textAlign:"left"}}>Dive into diverse practice quizzes, thoughtfully designed to enrich your understanding. 
                        Whether aiming for excellence or broadening horizons, our quizzes offer an engaging learning platform. Delve in, 
                        test your knowledge, and uncover insights – all while growing with us.</p>
                          </div>
                          <a href="/quiz" className="btn d-block mx-auto" style={{width:'fit-content',backgroundColor:'#1100ff',boxShadow: 'none',color:'white'}}>Go to Quiz Section</a>
                </div>
        </div>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#ff7300',borderRadius:'10vh'}}>
                <div className="text">
                      <div>
                        <h4>Challenge Your Friends</h4>
                      </div>
                      <div style={{marginTop:'5%'}}>
                        <p style={{textAlign:"left"}}>"Ready to challenge friends' skills or dive into a rapid-fire quiz? Welcome to 'Create A Quiz,'
                         where captivating quizzes await. Design brain-teasers for friends or foster family fun through friendly competitions.
                          Craft interactive quizzes that ignite curiosity, inviting everyone to join the learning journey together.</p>
                        <p style={{textAlign:"left"}}>Be it a party or a moment of leisure, create a quick quiz and let the fun challenges begin!".</p>
                          </div>
                          <a href="#" className="btn d-block mx-auto" style={{width:'fit-content',backgroundColor:'#1100ff',boxShadow: 'none',color:'white'}}>Create a Quiz</a>
                </div>
                <div className="image">
                    <img src="https://www.malwarebytes.com/blog/images/uploads/2018/12/shutterstock_1214717467.jpg" style={{borderRadius:'5vh'}}/>
                </div>
        </div>
    </div>
    )
}
export default Body
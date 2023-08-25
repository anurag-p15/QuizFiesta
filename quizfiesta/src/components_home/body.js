function Body(){
    return(
    <div>
        <div className="row" style={{borderBottom:"7px solid white"}}>
                <div className="text" style={{ marginLeft: '5%',marginTop:'10%', marginRight:'5%'}}>
                      <div>
                        <h4>QuizFiesta</h4>
                        <p style={{fontSize:"28px"}}><b>Enrich Explore Engage</b></p>
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
                        <p style={{textAlign:"left"}}>Our quizzes are your passport to an expansive world of knowledge. Our designed quizzes span 
                        across prominent and burgeoning sectors worldwide – from technology trends to business and finance insights. But that's not 
                        the end of the journey – we're also here to nurture your general aptitude skills. 
                        Through engaging quizzes, we sharpen your critical thinking, problem-solving, and more.
                        These Quizzes aim to equip you to excel in a multifaceted world. Delve into our diverse quizzes,
                         enrich your understanding, and cultivate skills that transcend boundaries.</p></div>
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
                        <p style={{textAlign:"left"}}>Explore a wide array of practice quizzes thoughtfully designed to enhance your understanding 
                        across various domains and sectors. Whether you're a student aiming for excellence or someone looking to expand your knowledge horizons,
                         our practice quizzes provide an engaging platform to learn and grow. Delve into the world of interactive learning, 
                         test your knowledge, and uncover new insights – all while enjoying the journey of self-improvement.</p>
                          </div>
                          <a href="#" className="btn d-block mx-auto" style={{width:'fit-content',backgroundColor:'#1100ff',boxShadow: 'none',color:'white'}}>Go to Quiz Section</a>
                </div>
        </div>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#ff7300',borderRadius:'10vh'}}>
                <div className="text">
                      <div>
                        <h4>Challenge Your Friends</h4>
                      </div>
                      <div style={{marginTop:'5%'}}>
                        <p style={{textAlign:"left"}}>"Ready to test your friends' skills or engage in a rapid-fire quiz? Step into the world of 
                        'Create A Quiz,' where you can design captivating quizzes for your friends, challenging them to exciting brain-teasers or 
                        creating friendly family competitions."Craft interactive quizzes that spark excitement and curiosity, inviting your 
                        circle to join in the fun of learning together. </p>
                        <p style={{textAlign:"left"}}>So even if you are at A party or getting bored, create a quick quiz and Let The Challenge began!!</p>
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
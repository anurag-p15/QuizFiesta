import Login from "./components_login/login_main";
import Home from "./components_home/home";
import User from "./user/user_profile";
import UserAttempt from "./user/user_attempted";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import TriviaSelectForm from "./Quiz_components/TriviaSelectForm";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user_profile" element={<User/>} />
        <Route path="/user_create_quiz" element={<User/>} />
        <Route path="/attempt_quiz" element={<User/>} />
        <Route path="/user_attempt_quiz" element={<UserAttempt/>} />
        <Route path="/quiz" element={<TriviaSelectForm />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
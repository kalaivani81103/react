import './App.css';
import { Route,Routes } from 'react-router-dom';
import Watch from './watch';
import  Log from './lr';
import Login from './Login';
import Signup from './Signup';
import Home from './home';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Movie1 from './movie1';
import Movie2 from './movie2';
import Movie3 from './movie3';
import Movie4 from './movie4';
import Movie5 from './movie5';
import Movie6 from './movie6.js';
import Movie7 from './movie7';
import Movie8 from './movie8';
import Movie9 from './movie9';
import Movie10 from './movie10';
// import Forgot from './forgot';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Watch/>}></Route>
      <Route path='/front' element={<Log/>}></Route>
      <Route path='/front/login' element={<Login/>}></Route>
      <Route path='/forgot' element={<Forgotpassword/>}></Route>
      <Route path='/reset' element={<Resetpassword/>}></Route>
      <Route path='/front/sign' element={<Signup/>}></Route>
      <Route path='/front/home' element={<Home/>}></Route>
      <Route path='/front/movie1' element={<Movie1/>}></Route>
      <Route path='/front/movie2' element={<Movie2/>}></Route>
      <Route path='/front/movie3' element={<Movie3/>}></Route>
      <Route path='/front/movie4' element={<Movie4/>}></Route>
      <Route path='/front/movie5' element={<Movie5/>}></Route>
      <Route path='/front/movie6' element={<Movie6/>}></Route>
      <Route path='/front/movie7' element={<Movie7/>}></Route>
      <Route path='/front/movie8' element={<Movie8/>}></Route>
      <Route path='/front/movie9' element={<Movie9/>}></Route>
      <Route path='/front/movie10' element={<Movie10/>}></Route>
    </Routes>
  );
}

export default App;

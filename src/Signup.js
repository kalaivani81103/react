import "./Userstyle.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Create Account</center>
          <form>
            <div class="inputlgn">
              <span>
                <label for="username">Username</label>
              </span>
              <br></br>
              <input type="text" id="username"></input>
            </div>
            <div class="inputlgn">
              <span>
                <label for="email">Email</label>
              </span>
              <br></br>
              <input type="email" id="email"></input>
              <br></br>
            </div>
            <div class="inputlgn">
              <span>
                <label for="password">Password</label>
              </span>
              <br></br>
              <input type="password" id="password"></input>
              <br></br>
            </div>
            <div class="inputlgn">
              <span>
                <label for="pass">Confirm Password</label>
              </span>
              <br></br>
              <input type="password" id="pass"></input>
              <br></br>
            </div>
            <br></br>
            <div class="btnlgn">
              <center>
                <Link to="/front/home">
                  <button>Sign up</button>
                </Link>
              </center>
            </div>
            <div class="sgn-txt1">
              <center>
                <span class="sgn-txt2">Already have an Account? </span>
                <span class="sgn-txt">
                  <Link to="/front/login" className="font1">
                    Login
                  </Link>
                </span>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

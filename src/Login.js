import "./Userstyle.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Login</center>
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
                <label for="password">Password</label>
              </span>
              <br></br>
              <input type="password" id="password"></input>
              <br></br>
            </div>
            <div class="fpwd-txt">
              <Link to="/forgot" className="font1">
                Forgot Password?
              </Link>
            </div>
            <div class="btnlgn">
              <center>
                <Link to="/front/home">
                  <button>Login</button>
                </Link>
              </center>
            </div>
            <div class="sgn-txt1">
              <center>
                <span class="sgn-txt2">Not have an Account? </span>
                <span class="sgn-txt">
                  <Link to="/front/sign" className="font1">
                    Sign Up
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

export default Login;

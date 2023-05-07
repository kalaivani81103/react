import "./Userstyle.css";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Forgot Password</center>
          <form>
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
                <label for="password">OTP</label>
              </span>
              <br></br>
              <input type="text" id="password"></input>
              <br></br>
            </div>
            <br></br>
            <div class="btnlgn">
              <center>
                <Link to="/reset">
                  <button>Reset</button>
                </Link>
              </center>
            </div>
            <div class="sgn-txt1">
              <center>
                <span class="sgn-txt2">Not Receiving an OTP? </span>
                <Link to="/reset" className="font1">
                  Resend
                </Link>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;

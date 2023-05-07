import "./Userstyle.css";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Reset Password</center>
          <form>
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
            </div>
            <br></br>
            <div class="btnlgn">
              <center>
                <Link to="/front/login">
                  <button>Confirm</button>
                </Link>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;

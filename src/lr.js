
import { Link } from 'react-router-dom';
import './lr.css';
const Log=() => {
    return(
        <div className='lbody1'>
            <div className='lbody'>
                <div className='lbody12'>
                    <p>Already have an Acount?</p>
                    <Link to="/front/login">Login</Link>
                </div>
            </div>
            <div className='lbody'>
                
                <div className='lbody12'>
                    <p>Not having an Account?</p>
                    <Link to="/front/sign">Signup</Link>
                </div>
            </div>
        </div>
    )
}
export default Log;
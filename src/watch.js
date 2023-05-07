import img from './assests/lpe.jpg';
import { Link } from 'react-router-dom';
import './watch.css';
const Watch = () => {
    return (
        <>
            <div className='wt-cont1'>
                <div className='wt-cont'>
                    <Link to="/front" className='wt-cont12'>Play</Link>

                </div>
            </div>
        </>
    )
}
export default Watch;
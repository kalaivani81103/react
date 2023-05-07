import { Link } from 'react-router-dom';
import './home.css';
import i1 from './assests/n1.jpg';
import i2 from './assests/n2.jpg';
import i3 from './assests/n3.jpg';
import i4 from './assests/n4.jpg';
import i5 from './assests/n5.jpg';
import i6 from './assests/t1.jpg';
import i7 from './assests/t2.jpg';
import i8 from './assests/t3.jpg';
import i9 from './assests/t4.jpg';
import i10 from './assests/t5.jpg';
const Home = () => {
    return (
        <div className='home-cont1'>
            <div className='navbar157'>
                <Link to="/front" className="font157">Home</Link>
                <input type="search" placeholder='SEARCH HERE' className='font156'></input>
            </div>
            <div className='box123'>
                <h2>HOLLYWOOD</h2>
                <div class="grid-container1">
                    <div class="grid-item"><Link to="/front/movie1"><img src={i1} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie2"><img src={i2} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie3"><img src={i3} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie4"><img src={i4} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie5"><img src={i5} alt=""></img></Link></div>
                </div>
                <h2>KOLLYWOOD</h2>
                <div class="grid-container2">
                    <div class="grid-item"><Link to="/front/movie6"><img src={i6} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie7"><img src={i7} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie8"><img src={i8} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie9"><img src={i9} alt=""></img></Link></div>
                    <div class="grid-item"><Link to="/front/movie10"><img src={i10} alt=""></img></Link></div>
                </div>
            </div>
        </div>
    )

}
export default Home;
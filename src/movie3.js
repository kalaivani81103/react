import { Link } from 'react-router-dom';
import './movie3.css';
import k3 from './assests/n3.jpg';
const Movie3 = () => {
    return (
        
             <div>
             <a href ="https://youtu.be/tE2NILju-Jk"><img src={k3} alt="" className="cat"></img></a>
             <h1 className="cat1">MOVIE DESCRIPTION</h1>
             <h5 className="cat10">RATING:5★</h5>
             <p className="cat2">Earth's future has been riddled by disasters, famines, and droughts. 
             There is only one way to ensure mankind's survival: Interstellar travel. 
             A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, 
             a planet that may have the right environment to sustain human life.</p>
            <h1 className="cat3">CAST & CREW</h1>
            <h3 className="cat4">DIRECTOR:</h3>
            <p className="cat5">Christopher Nolan</p> 
            <h3 className="cat6">WRITERS:</h3>
            <p className="cat7">Jonathan Nolan,Christopher Nolan</p> 
            <h3 className="cat8">STARS:</h3>
            <p className="cat9">Matthew McConaughey,Anne Hathaway,Jessica Chastain</p> 
            <h1 className="cat11"><a href="https://youtu.be/Lm8p5rlrSkY">WATCH TRAILER</a></h1>
             </div>
             )
             }
 export default Movie3;          
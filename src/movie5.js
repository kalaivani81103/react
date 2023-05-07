import { Link } from 'react-router-dom';
import './movie5.css';
import k5 from './assests/n5.jpg';
const Movie5 = () => {
    return (
        
             <div>
             <a href ="https://youtu.be/Pj5laLK4itI"><img src={k5} alt="" className="egg"></img></a>
             <h1 className="egg1">MOVIE DESCRIPTION</h1>
             <h5 className="egg10">RATING:3.8★</h5>
             <p className="egg2">Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories,
              as he attempts to find the murderer of his wife, which is the last thing he remembers. 
              One story line moves forward in time while the other tells the story backwards revealing more each time.</p>
            <h1 className="egg3">CAST & CREW</h1>
            <h3 className="egg4">DIRECTOR:</h3>
            <p className="egg5">Christopher Nolan</p> 
            <h3 className="egg6">WRITERS:</h3>
            <p className="egg7">Christopher Nolan(screenplay)Jonathan Nolan(short story "Memento Mori")</p> 
            <h3 className="egg8">STARS:</h3>
            <p className="egg9">Guy Pearce,Carrie-Anne Moss,Joe Pantoliano</p> 
            <h1 className="egg11"><a href="https://youtu.be/4CV41hoyS8A">WATCH TRAILER</a></h1>
             </div>
             )
             }
 export default Movie5;          
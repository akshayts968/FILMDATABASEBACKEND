import { useState,useEffect } from 'react';
import './Main.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Main(){
    const { id } = useParams(); 
    let logo = 'https://www.koimoi.com/wp-content/new-galleries/2022/06/vikram-movie-review-out-02.jpg';
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/movie', {
                    params: { id: id } // Pass the ID as a query parameter
                });
                console.log("data",response);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, []);
    return (
        <div className="Main"> 
            WELCOME
            <div className="Item">
                <div className='MOV-Img'>
                <div className="card" >
                    <img src={data.ImageURL||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQBS2LaleV63fVcOQNS_PsrkET8gKZHoK-g&s'||'https://www.koimoi.com/wp-content/new-galleries/2022/06/vikram-movie-review-out-02.jpg'} className="card-img-top" alt="..."/>
                    <div class="card-body">
            <h5 class="card-title">{data.FilmName}</h5>
            <section class="film-details">
                <div class="detail">
                    <label>Description</label>
                    <p class="card-text">{data.Description}.</p>
                </div>
                <label>CAST</label>
                <div className='MActor h'>
                        {data.Actors && data.Actors.map((actor) => (
                            <a href={`/actor/${actor.ID}`} key={actor.ID}>
                                <span className='ActorImg'>
                                    <img src={actor.ImageURL} alt={actor.Name} />
                                    <label>{actor.Name}</label>
                                </span>
                            </a>
                        ))}
                    </div>
                    <label>Genre</label>
                <div className='MActor h'>
                        {data.Genres && data.Genres.map((actor) => (
                                <span className='ActorImg'>
                                    {/*<img src={actor.ImageURL} alt={actor.Name} />*/}
                                    <label>{actor}</label>
                                </span>
                        ))}
                    </div>

                    <label>Director</label>
                <div className='MActor h'>
                        <span className='ActorImg'>
                            <img src={data.Director && data.Director.ImageURL || 'https://www.koimoi.com/wp-content/new-galleries/2022/06/vikram-movie-review-out-02.jpg'}/>
                            <a href={`/director/${data.Director && data.Director.ID}`}><label>{data.Director && data.Director.Name}</label></a>
                        </span>
                    </div>
                <div class="detail">
                    <label>Budget</label>
                    <p class="card-text">${data.Budget}</p>
                </div>
                <div class="detail">
                    <label>Revenue</label>
                    <p class="card-text">${data.Revenue}</p>
                </div>
                <div class="detail">
                    <label>IMDb Rating</label>
                    <p class="card-text">{data.IMDb}</p>
                </div>
                <div class="detail">
                    <label>Duration</label>
                    <p class="card-text">{data.Duration} minutes</p>
                </div>
                <div class="detail">
                    <label>Release Year</label>
                    <p class="card-text">{data.ReleaseYear}</p>
                </div>
            </section>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

                    </div>
                </div>
                {/*<div className='Details'>
                    <div className='MHead'>
                        Jailer
                    </div>
                    <div className='MDesc h'>
                    Tiger Muthuvel Pandian, a retired jailer, is now a family man who leads an ordinary life. Trouble knocks on his door when his son, a diligent cop, investigates an idol smuggling mafia. And forces Muthuvel Pandian to step back into the dark world of his past.
                    </div>
                    <div className='MActor h'>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                        <span className='ActorImg'>
                            <img src={logo}/>
                        </span>
                    </div>
                    <div className='MGenre h'>
                        <span>
                            Action
                        </span>
                        <span className='DOT'></span>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}
export default Main;
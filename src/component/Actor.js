import './Main.css'
import './Actor.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Actor(){
    const { id } = useParams(); 
    let logo = 'https://www.koimoi.com/wp-content/new-galleries/2022/06/vikram-movie-review-out-02.jpg';
    const [data,setData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/actor', {
                params: { id: id } // Pass the ID as a query parameter
            });
            console.log("actor data",response);
            setData(response.data); // Assuming the data is in the response's data property
          } catch (err) {
            console.error('Error fetching options:', err);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="Main">
            { 
            <div className="Item">
                <div className='MOV-Img'>
                <div className="card" >
                    <img src={data.ImageURL||'https://www.koimoi.com/wp-content/new-galleries/2022/06/vikram-movie-review-out-02.jpg'} className="card-img-top" alt="..."/>
                    <div class="card-body">
            <h5 class="card-title">{data.ActorName}</h5>
            
            <section class="film-details">
                <div class="detail">
                    <label>DebutYear</label>
                    <p class="card-text">{data.DebutYear}</p>
                </div>
                <label>Movies</label>
                <div className='MActor h'>
                    {data.Films && data.Films.map(movie => (
                        <a href={`/${movie.FilmID}`} key={movie.FilmID}>
                            <span className='ActorImg'>
                                <img src={movie.ImageURL || logo} alt={movie} />
                                <label>{movie.FilmName || 'kochi'}</label>
                            </span>
                        </a>
                    ))}
                </div>

                    
                <div class="detail">
                    <label>DOB</label>
                    <p class="card-text">{data.DOB && data.DOB.split("T")[0]}</p>
                </div>
                <div class="detail">
                    <label>Gender</label>
                    <p class="card-text">{data.Gender}</p>
                </div>
                <div class="detail">
                    <label>Nationality</label>
                    <p class="card-text">{data.Nationality}</p>
                </div>
                <div class="detail">
                    <label>No. of Movies</label>
                    <p class="card-text">{data.NFilm}</p>
                </div>
                <div class="detail">
                    <label> No. of Awards</label>
                    <p class="card-text">{data.NAward}</p>
                </div>
                <div class="detail">
                    <label> Net Worth</label>
                    <p class="card-text">{data.NetWorth}</p>
                </div>
            </section>
            <a href={`/actor/edit/${data.ActorID}`} class="btn btn-primary">Edit</a>
        </div>

                    </div>
                </div>
            </div>}
        </div>
    )
}
export default Actor;
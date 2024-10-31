import './Main.css'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Director(){
    const {id} = useParams();
    let logo = 'https://www.koimoi.com/wp-content/new-galleries/2022/06/vikram-movie-review-out-02.jpg';
    const [data,setData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/director', {
                params: { id: id } // Pass the ID as a query parameter
            });
            console.log("director data",response);
            setData(response.data); // Assuming the data is in the response's data property
          } catch (err) {
            console.error('Error fetching options:', err);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="Main">
            <div className="Item">
                <div className='MOV-Img'>
                <div className="card" >
                    <img src={data.ImageURL} className="card-img-top" alt="..."/>
                    <div class="card-body">
    <h5 class="card-title">{data.DirectorName}</h5>
            <section class="film-details">
                <div class="detail">
                    <label>DebutYear</label>
                    <p class="card-text">{data.DebutYear}</p>
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
            </section>
            <a href={`/director/edit/${data.DirectorID}`} class="btn btn-primary">Edit</a>
        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Director;
import './Card.css';
import Premalu from '../images/Premalu.jpg';
import { useState, useEffect } from 'react';

function Card({ film }) {
    console.log("data",film);
    return (
        <div className="card">
            <img 
                src={film.ImageURL || Premalu} // Fallback to the default image
                className="card-img-top" 
                alt={film.FilmName} 
            />
            <div className="card-body">
                <h5 className="card-title">{film.FilmName}</h5>
                <p className="card-text">{film.Description}</p>
                <a href={`/${film.FilmID}`} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;

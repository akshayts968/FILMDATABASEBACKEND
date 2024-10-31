import './Home.css';
import SearchBar from './component/SearchBar';
import Card from './component/Card';
import { useState } from 'react';

function Home() {
    const [filmData, setFilmData] = useState([]); // State to store film data

    // Function to update film data from SearchBar
    const handleFilmDataUpdate = (data) => {
        console.log("WORKING");
        setFilmData(data); // Update state with new film data
    };

    return (
        <div className="Home">
            <SearchBar onFilmDataUpdate={handleFilmDataUpdate} />
            <div className='CardGRP'>
                {filmData.map((film, index) => (
                    <Card key={index} film={film} />
                ))}
            </div>
        </div>
    );
}

export default Home;

import './SearchBar.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

function SearchBar({onFilmDataUpdate}) {
    const [selectedOptions, setSelectedOptions] = useState({
        actors: [],
        directors: [],
        producers: [],
    });

    const [options, setOptions] = useState({
        actors: [],
        directors: [],
        producers: [],
    });

    // Fetch options from backend
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/options');
                console.log("data",response);
                setOptions(response.data);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, []);
    const handleCheckboxChange = (category) => (e) => {
        const { value } = e.target;
        setSelectedOptions((prev) => {
            const isSelected = prev[category].includes(value);
            return {
                ...prev,
                [category]: isSelected
                    ? prev[category].filter(option => option !== value)
                    : [...prev[category], value],
            };
        });
    };

    // Submit handler
    const handleSubmit = async(e) => {
        e.preventDefault();
        /*const combinedData = {
            ...formData,
            ...selectedOptions 
        };
        const queryParams = new URLSearchParams(combinedData).toString();*/
        console.log('Form submitted:', formData);
        console.log('Selected Options:', selectedOptions);
        
        axios.get(`http://localhost:8080/search`, {
            params: {
              Find: formData.Find,
              actors: selectedOptions.actors, // Your state for actors
              directors: selectedOptions.directors, // Your state for directors
              producers: selectedOptions.producers // Your state for producers
            }
          })
          .then(response => {
            console.log("dta",response);
            onFilmDataUpdate(response.data.results);
            setSelectedOptions({
                actors: [],
                directors: [],
                producers: [],
            });
          })
          .catch(error => {
            console.error("Error fetching options:", error);
          });
            // Reset selected options to empty arrays
            
        
    };

    const [showMore, setShowMore] = useState(false);
    const toggleMoreOptions = () => {
        setShowMore(prev => !prev);
    };
    const [showActorMore, setShowActorMore] = useState(false);
    const [showDirectorMore, setShowDirectorMore] = useState(false);
    const [showProducerMore, setShowProducerMore] = useState(false);
    const toggleActorMore = () => {
        setShowActorMore(prev => !prev);
    };

    const toggleDirectorMore = () => {
        setShowDirectorMore(prev => !prev);
    };

    const toggleProducerMore = () => {
        setShowProducerMore(prev => !prev);
    };

    const [formData, setFormData] = useState({
        Find: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="SearchBar">
            <div className='SubBar'>
                <div className='SearchInput'>
                    <input
                        type='text'
                        name='Find'
                        value={formData.Find}
                        onChange={handleChange}
                        placeholder="Search..."
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Search</button>
            </div>
            <button type="button" className="btn btn-danger" onClick={toggleMoreOptions}>
                {showMore ? 'Less' : 'More'}
            </button>

            {showMore && (
                <div className='More'>
                    <div className="dropdown">
                        <button type="button" className="btn btn-danger" onClick={toggleActorMore}>Actors</button>
                        {showActorMore && <div className='options'>
                            {options.actors && options.actors.map(option => (
                                <div key={option.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={option.label}
                                            checked={selectedOptions.actors.includes(option.label)}
                                            onChange={handleCheckboxChange('actors')}
                                        />
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>}
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn btn-danger" onClick={toggleDirectorMore}>Directors</button>
                        {showDirectorMore && <div className='options'>
                            {options.directors && options.directors.map(option => (
                                <div key={option.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={option.label}
                                            checked={selectedOptions.directors.includes(option.label)}
                                            onChange={handleCheckboxChange('directors')}
                                        />
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>}
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn btn-danger" onClick={toggleProducerMore}>Producers</button>
                        {showProducerMore && <div className='options'>
                            {options.producers && options.producers.map(option => (
                                <div key={option.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={option.label}
                                            checked={selectedOptions.producers.includes(option.label)}
                                            onChange={handleCheckboxChange('producers')}
                                        />
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchBar;

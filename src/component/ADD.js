import React, { useState,useEffect } from 'react';
import './ADD.css';
import axios from 'axios';
function GenreADD(){
    return(
        <form>

        </form>
    )
}
function ProducerADD({ NewProducer }) {
    const [formProducer, setFormProducer] = useState({
        companyName: '',
        producerName: '',
        imageUrl: '',
        nMovies: ''
    });

    const handleProducerChange = (e) => {
        const { name, value } = e.target;
        setFormProducer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        NewProducer(formProducer);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter company name"
                    value={formProducer.companyName}
                    onChange={handleProducerChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="producerName">Producer Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="producerName"
                    name="producerName"
                    placeholder="Enter producer name"
                    value={formProducer.producerName}
                    onChange={handleProducerChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="url"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Enter image URL"
                    value={formProducer.imageUrl}
                    onChange={handleProducerChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="nMovies">Number of Movies</label>
                <input
                    type="number"
                    className="form-control"
                    id="nMovies"
                    name="nMovies"
                    placeholder="Enter number of movies"
                    value={formProducer.nMovies}
                    onChange={handleProducerChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Producer</button>
        </form>
    );
}


function DirectorADD({NewDirector,data}) {
    const [formDirector, setFormDirector] = useState({
        DirectorName: '',
        ImageURL: '',
        DOB: '',
        Nationality: '',
        Gender: '',
        DebutYear: '',
        NFilm: '',
    });
    
    useEffect(() => {
        console.log(data);
        if (data) {
            setFormDirector(data);
            const [day,month,year] = data.DOB.split("T")[0];
            console.log(day,month,year,data.DOB)
        }
    }, [data]);
    const handleChangeDirector = (e) => {
        const { name, value } = e.target;
        setFormDirector((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDSubmit = (e) => {
        e.preventDefault();
        NewDirector(formDirector);
        console.log('Director added:', formDirector);
    };

    return (
        <form className='DirectorADD' onSubmit={handleDSubmit}>
            <div className="form-group ActorForm">
                <label htmlFor="DirectorName">DirectorName</label>
                <input
                    type="text"
                    className="form-control"
                    id="DirectorName"
                    name="DirectorName"
                    placeholder="Enter director name"
                    value={formDirector.DirectorName}
                    onChange={handleChangeDirector}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="ImageURL">Image URL</label>
                <input
                    type="url"
                    className="form-control"
                    id="ImageURL"
                    name="ImageURL"
                    placeholder="Enter image URL"
                    value={formDirector.ImageURL}
                    onChange={handleChangeDirector}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="DOB">Date of Birth</label>
                <input
                    type="date"
                    className="form-control"
                    id="DOB"
                    name="DOB"
                    value={formDirector.DOB}
                    onChange={handleChangeDirector}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="Nationality">Nationality</label>
                <input
                    type="text"
                    className="form-control"
                    id="Nationality"
                    name="Nationality"
                    placeholder="Enter nationality"
                    value={formDirector.Nationality}
                    onChange={handleChangeDirector}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="Gender">Gender</label>
                <select
                    className="form-control"
                    id="Gender"
                    name="Gender"
                    value={formDirector.Gender}
                    onChange={handleChangeDirector}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="DebutYear">Debut Year</label>
                <input
                    type="number"
                    className="form-control"
                    id="DebutYear"
                    name="DebutYear"
                    placeholder="Enter debut year"
                    value={formDirector.DebutYear}
                    onChange={handleChangeDirector}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="NFilm">Number of Films</label>
                <input
                    type="number"
                    className="form-control"
                    id="NFilm"
                    name="NFilm"
                    placeholder="Enter number of films"
                    value={formDirector.NFilm}
                    onChange={handleChangeDirector}
                    required
                />
            </div>

            <button type="submit" className="btn btn-danger">Add Director</button>
        </form>
    );
}


function ActorADD({ NewActor,data }) {
    const [formActor, setFormActor] = useState({
        ActorName: '',
        ImageURL: '',
        DebutYear: '',
        DOB: '',
        Gender: '',
        Nationality: '',
        NFilm: '',
        NAward: '',
        NetWorth: '',
    });
    useEffect(() => {
        if (data) {
            setFormActor(data);
        }
    }, [data]);
    
    const handleChangeActor = (e) => {
        const { name, value } = e.target;
        setFormActor({ ...formActor, [name]: value });
    };

    const handleASubmit = (e) => {
        e.preventDefault();
        NewActor(formActor);
        console.log(formActor);
        setFormActor({ // Reset form after submission
            ActorName: '',
            ImageURL: '',
            DebutYear: '',
            DOB: '',
            Gender: '',
            Nationality: '',
            NFilm: '',
            NAward: '',
            NetWorth: '',
        });
    };

    return (
        <form className='ActorADD' onSubmit={handleASubmit}>
            <div className="form-group ActorForm">
                <label htmlFor="ActorName">Actor Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="ActorName"
                    name="ActorName"
                    placeholder="Enter actor name"
                    value={formActor.ActorName}
                    onChange={handleChangeActor}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="ImageURL">Image URL</label>
                <input
                    type="url"
                    className="form-control"
                    id="ImageURL"
                    name="ImageURL"
                    placeholder="Enter image URL"
                    value={ formActor.ImageURL}
                    onChange={handleChangeActor}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="DebutYear">Debut Year</label>
                <input
                    type="number"
                    className="form-control"
                    id="DebutYear"
                    name="DebutYear"
                    placeholder="Enter debut year"
                    value={formActor.DebutYear}
                    onChange={handleChangeActor}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="DOB">Date of Birth</label>
                <input
                    type="date"
                    className="form-control"
                    id="DOB"
                    name="DOB"
                    value={formActor.DOB}
                    onChange={handleChangeActor}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="Gender">Gender</label>
                <select
                    className="form-control"
                    id="Gender"
                    name="Gender"
                    value={formActor.Gender}
                    onChange={handleChangeActor}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="Nationality">Nationality</label>
                <input
                    type="text"
                    className="form-control"
                    id="Nationality"
                    name="Nationality"
                    placeholder="Enter nationality"
                    value={formActor.Nationality}
                    onChange={handleChangeActor}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="NFilm">Number of Films</label>
                <input
                    type="number"
                    className="form-control"
                    id="NFilm"
                    name="NFilm"
                    placeholder="Enter number of films"
                    value={formActor.NFilm}
                    onChange={handleChangeActor}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="NAward">Number of Awards</label>
                <input
                    type="number"
                    className="form-control"
                    id="NAward"
                    name="NAward"
                    placeholder="Enter number of awards"
                    value={  formActor.NAward}
                    onChange={handleChangeActor}
                    required
                />
            </div>

            <div className="form-group ActorForm">
                <label htmlFor="NetWorth">Net Worth</label>
                <input
                    type="text"
                    className="form-control"
                    id="NetWorth"
                    name="NetWorth"
                    placeholder="Enter net worth"
                    value={formActor.NetWorth}
                    onChange={handleChangeActor}
                    required
                />
            </div> 

            <button type="submit" className="btn btn-danger">ADD Actor</button>
        </form>
    );
}




 // Assuming DirectorADD is in the same directory

function ADD() {
    const [badge, setBadge] = useState(false);
    const [formData, setFormData] = useState({
        filmName: '',
        budget: '',
        description: '',
        revenue: '',
        imageUrl: '',
        imdb: '',
        duration: '',
        releaseYear: '',
        Actor: '',
        Director: '',
        Producer: '',
    });
    
    const [formActor, setFormActor] = useState({
        ActorName: '',
        ImageURL: '',
        DebutYear: '',
        DOB: '',
        Gender: '',
        Nationality: '',
        NFilm: '',
        NAward: '',
        NetWorth: '',
    });

    const [formDirector, setFormDirector] = useState({
        DirectorName: '',
        ImageURL: '',
        DOB: '',
        Nationality: '',
        Gender: '',
        DebutYear: '',
        NFilm: '',
    });

    const [formProducer, setFormProducer] = useState({
        companyName: '',
        producerName: '',
        imageUrl: '',
        nMovies: '',
    });

    const [options, setOptions] = useState({
        actors: [],
        directors: [],
        producers: [],
        genres:[]
    });

    const [selectedOptions, setSelectedOptions] = useState({
        actors: [],
        directors: [],
        producers: [],
        genres:[]
    });
    const [newActors, setNewActors] = useState([]);
    const handleNewActor = (actor) => {
        setNewActors(prevData => [...prevData, actor]);
    };
    const [newDirector, setNewDirector] = useState([]);
    const handleNewDirector = (director) => {
        setNewDirector(prevData => [...prevData, director]);
    };
    const [newProducer, setNewProducer] = useState([]);
    const handleNewProducer = (producer) => {
        setNewProducer(prevData => [...prevData, producer]);
    };
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                console.log(newActors);
                console.log(newDirector);

            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, [newActors,newDirector]);
    const [showActorForm, setShowActorForm] = useState(false);
    const [showDirectorForm, setShowDirectorForm] = useState(false);
    const [showProducerForm, setShowProducerForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleActorChange = (e) => {
        const { name, value } = e.target;
        setFormActor(prevData => ({ ...prevData, [name]: value }));
    };

    const handleDirectorChange = (e) => {
        const { name, value } = e.target;
        setFormDirector(prevData => ({ ...prevData, [name]: value }));
    };

    const handleProducerChange = (e) => {
        const { name, value } = e.target;
        setFormProducer(prevData => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = (category) => (e) => {
        const { value } = e.target;
        setSelectedOptions(prev => {
            const isSelected = prev[category].includes(value);
            return {
                ...prev,
                [category]: isSelected
                    ? prev[category].filter(option => option !== value)
                    : [...prev[category], value],
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            filmData: formData,
            actorData: selectedOptions.actors,
            directorData: selectedOptions.directors,
            producerData: selectedOptions.producers,
            genreData:selectedOptions.genres,
            newActors:newActors,
            newDirector:newDirector,
            newProducer:newProducer
        };
        console.log('Form submitted successfully:', payload);
        try {
            await axios.post('http://localhost:8080/data', payload);
            console.log('Form submitted successfully:', payload);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const resetForms = () => {
        setFormData({
            filmName: '',
            budget: '',
            description: '',
            revenue: '',
            imageUrl: '',
            imdb: '',
            duration: '',
            releaseYear: '',
            Actor: 'Select One',
            Director: 'Select One',
            Producer: 'Select One',
        });
        setFormActor({ /* initial values */ });
        setFormDirector({ /* initial values */ });
        setFormProducer({ /* initial values */ });
        setSelectedOptions({ actors: [], directors: [], producers: [] });
        setBadge(false);
    };

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/options');
                setOptions(response.data);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, [formActor]);

    return (
        <div>
            {badge && (
                <div className="alert alert-primary" role="alert">
                    Please select an actor, director, and producer before submitting!
                    <button type="button" className="btn btn-dark" onClick={() => setBadge(false)}>Close</button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                {/* Film Name */}
                <div className="form-group">
                    <label htmlFor="filmName">Film Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="filmName"
                        name="filmName"
                        placeholder="Enter film name"
                        value={formData.filmName}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Actors */}
                <div className="dropdown ActorForm">
                    <label htmlFor="Actor">Actor:</label>
                    <div className='ActorCheckBox'>
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
                    </div>
                    <div className='ActorNew'>
                    {newActors && newActors.map(option => (
                            <div key={option.id}>
                                <button className='btn btn-success'>{option.ActorName}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dropdown ActorForm">
                    <label htmlFor="Director">Director:</label>
                    <div className='ActorCheckBox'>
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
                    </div>
                    <div className='ActorNew'>
                    {newDirector && newDirector.map(option => (
                            <div key={option.id}>
                                <button className='btn btn-success'>{option.DirectorName}</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Producers */}
                <div className="dropdown ActorForm">
                    <label htmlFor="Producer">Producer:</label>
                    <div className='ActorCheckBox'>
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
                    </div>
                    <div className='ActorNew'>
                    {newProducer && newProducer.map(option => (
                            <div key={option.id}>
                                <button className='btn btn-success'>{option.producerName}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dropdown ActorForm">
                    <label htmlFor="Actor">Genres:</label>
                    <div className='ActorCheckBox'>
                        {options.genres && options.genres.map(option => (
                            <div key={option.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={option.label}
                                        checked={selectedOptions.genres.includes(option.label)}
                                        onChange={handleCheckboxChange('genres')}
                                    />
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Remaining Fields */}
                <div className="form-group">
                    <label htmlFor="budget">Budget</label>
                    <input
                        type="number"
                        className="form-control"
                        id="budget"
                        name="budget"
                        placeholder="Enter budget"
                        value={formData.budget}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        placeholder="Enter film description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="revenue">Revenue</label>
                    <input
                        type="number"
                        className="form-control"
                        id="revenue"
                        name="revenue"
                        placeholder="Enter revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="url"
                        className="form-control"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter image URL"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="imdb">IMDb Rating</label>
                    <input
                        type="number"
                        className="form-control"
                        min="0"
                        max="10"
                        id="imdb"
                        name="imdb"
                        placeholder="Enter IMDb rating"
                        value={formData.imdb}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="duration">Duration (minutes)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="duration"
                        name="duration"
                        placeholder="Enter duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="releaseYear">Release Year</label>
                    <input
                        type="number"
                        className="form-control"
                        id="releaseYear"
                        name="releaseYear"
                        placeholder="Enter release year"
                        min="1900"
                        max="2100"
                        value={formData.releaseYear}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button type="button" className="btn btn-dark" onClick={() => setShowActorForm(!showActorForm)}>ADD Actor</button>
            {showActorForm && <ActorADD NewActor={handleNewActor}/>}
            <button type="button" className="btn btn-dark" onClick={() => setShowDirectorForm(!showDirectorForm)}>ADD Director</button>
            {showDirectorForm && <DirectorADD NewDirector={handleNewDirector} handleChangeDirector={handleDirectorChange} />}
            <button type="button" className="btn btn-dark" onClick={() => setShowProducerForm(!showProducerForm)}>ADD Producer</button>
            {showProducerForm && <ProducerADD NewProducer={handleNewProducer} handleProducerChange={handleProducerChange}/>}

        </div>
    );
}

export { ADD, ActorADD, DirectorADD };

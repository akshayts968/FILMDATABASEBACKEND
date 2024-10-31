import { useEffect, useState } from "react";
import { ActorADD } from "../component/ADD";
import axios from "axios";
import { useParams } from "react-router-dom";
import s from './s'
function ActorEdit() {
    const { id } = useParams(); 
    const [editActor, setEditActor] = useState(null);
    const [data, setData] = useState(null);

    const handleNewActor = async(actor) => {
        setEditActor(actor);
        console.log("ACt",editActor, "kovhi",actor);
        try {
            const response = await axios.put(`http://localhost:8080/edit/${id}`, actor);
            console.log("edit update data", response.data);
        } catch (err) {
            console.error('Error updating actor:', err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/actor', {
                    params: { id: id } 
                });
                console.log("edit data", response.data);
                setData(response.data);
            } catch (err) {
                console.error('Error fetching actor data:', err);
            }
        };
        fetchData();
    }, [id]);

    /*useEffect(() => {
        const updateActor = async () => {
            try {
                const response = await axios.post(`http://localhost:8080/edit/${id}`, editActor);
                console.log("edit update data", response.data);
                setData(response.data); 
            } catch (err) {
                console.error('Error updating actor:', err);
            }
        };
        if (editActor) {
            updateActor();
        }
    }, [editActor, id]);*/
    return (
        <div className="ActorEdit">
            <s/>
            <ActorADD NewActor={handleNewActor} data={data} />
        </div>
    );
}

export default ActorEdit;

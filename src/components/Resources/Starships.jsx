import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Starships = () => {
    const { id } = useParams();
    const [starships, setStarships] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loadPerson = async () => {
            try {
                const response = await axios
                    .get(`https://swapi.dev/api/starships/${id}/`);
                setStarships(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                navigate('/error');
            }
        };

        loadPerson();
    }, [id, navigate]);

    if (starships === null) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <h1>{starships.name}</h1>
            <p>Model: {starships.model}</p>
            <p>Manufacturer: {starships.manufacturer}</p>
            <p>Class: {starships.starship_class}</p>
        </div>
    );
};

export default Starships;
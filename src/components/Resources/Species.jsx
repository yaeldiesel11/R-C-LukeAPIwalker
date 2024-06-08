import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Species = () => {
    const { id } = useParams();
    const [species, setSpecies] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loadPerson = async () => {
            try {
                const response = await axios
                    .get(`https://swapi.dev/api/species/${id}/`);
                setSpecies(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                navigate('/error');
            }
        };

        loadPerson();
    }, [id, navigate]);

    if (species === null) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <h1>{species.name}</h1>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Average lifespan: {species.average_lifespan}</p>
            <p>Homeworld: {species.homeworld}</p>
        </div>
    );
};

export default Species;
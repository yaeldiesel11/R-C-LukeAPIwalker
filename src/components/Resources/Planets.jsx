//almost the same as people component
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Planets = () => {
    const { id } = useParams();  // used to get the :id from the url (fixed) (important)
    const [planets, setPlanets] = useState(null);

    useEffect(() => {
        const loadPerson = async () => {
            try {
                const response = await axios
                    .get(`https://swapi.dev/api/planets/${id}/`);
                setPlanets(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        loadPerson();
    }, [id]);

    if (planets === null) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <h1>{planets.name}</h1>
            <p>Terrain: {planets.terrain}</p>
            <p>Climate: {planets.climate}</p>
            <p>Population: {planets.population}</p>
        </div>
    );
};

export default Planets;
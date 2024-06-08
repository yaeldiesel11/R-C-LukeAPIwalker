import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const People = () => {
    const { id } = useParams();  // used to get the :id from the url (fixed) (important)
    const [people, setPeople] = useState(null);

    useEffect(() => {
        const loadPerson = async () => {
            try {
                const response = await axios
                    .get(`https://swapi.dev/api/people/${id}/`);
                setPeople(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        loadPerson();
    }, [id]);

    if (people === null) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <h1>{people.name}</h1>
            <p>Height: {people.height}</p>
            <p>Hair color: {people.hair_color}</p>
            <p>Birth year: {people.birth_year}</p>
            <p>Homeworld: {people.homeworld}</p>
        </div>
    );
};

export default People;
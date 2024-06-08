import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Films = () => {
    const { id } = useParams();
    const [films, setFilms] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loadPerson = async () => {
            try {
                const response = await axios
                    .get(`https://swapi.dev/api/films/${id}/`);
                setFilms(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                navigate('/error');
            }
        };

        loadPerson();
    }, [id, navigate]);

    if (films === null) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <h1>{films.title}</h1>
            <p>Episode: {films.episode_id}</p>
            <p>Release date: {films.release_date}</p>
            <p>Director: {films.director}</p>
        </div>
    );
};

export default Films;
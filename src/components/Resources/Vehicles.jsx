import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Vehicles = () => {
    const { id } = useParams();
    const [vehicles, setVehicles] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loadPerson = async () => {
            try {
                const response = await axios
                    .get(`https://swapi.dev/api/vehicles/${id}/`);
                setVehicles(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                navigate('/error');
            }
        };

        loadPerson();
    }, [id, navigate]);

    if (vehicles === null) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <h1>{vehicles.name}</h1>
            <p>Model: {vehicles.model}</p>
            <p>Manufacturer: {vehicles.manufacturer}</p>
            <p>Class: {vehicles.vehicle_class}</p>
        </div>
    );
};

export default Vehicles;
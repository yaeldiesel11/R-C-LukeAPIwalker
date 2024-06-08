import React, { useEffect, useState } from "react";
import axios from "axios";

const Homeworld = ({ url }) => {
    const [homeworld, setHomeworld] = useState({});

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setHomeworld(response.data)
            })
            .catch(console.log)
    }, [url])

    return (
        <div>
            <p> Homeworld: {homeworld.name} </p>
        </div>
    )
}

export default Homeworld;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });

    const onChangeHandler = (e) => {
        setFormState({
            ...formState, //copying whats already in formState
            [e.target.name]: e.target.value //overwrite. [] is a variable
        })
    }

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        navigate("/" + formState.option + "/" + formState.id); //triggered by routes on app.jsx
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label> Search for: </label>
            <select
                name="option" //debe ser igual al objeto del state
                value={formState.option}
                onChange={onChangeHandler}>
                <option value="people"> People </option>
                <option value="planets"> Planets </option>
            </select>

            <label> ID: </label>
            <input
                name="id"
                value={formState.id}
                onChange={onChangeHandler} />
            <button> Search </button>
        </form>
    )
}

export default SearchBar;
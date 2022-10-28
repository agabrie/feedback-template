import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateCoreConcept({handleCreateConcept}){
    const [formData, setFormData] = useState({ title: '', description: '' });
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)

        axios.post('http://localhost:3001/api/core-concepts',{concept:formData.title,description:formData.description})
        .then((res)=>{
            console.log(res)
            handleCreateConcept(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    return(
        <>
            <label htmlFor="title">Title :</label>
            <input id="concept-title" name="title" onChange={handleInputChange} value={formData.title}/>
            <label htmlFor="description">Description :</label>
            <input id="concept-description" name="description" onChange={handleInputChange} value={formData.description}/>

            <button onClick={handleSubmit}> Add Core Concept</button>
        </>
    );
}

export default CreateCoreConcept
import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewCoreConcepts({refreshCounter}){
    // const [formData, setFormData] = useState({ title: '', description: '' });
    const [concepts, setConcepts] = useState([]);
    useEffect(()=>{
        getAllCoreConcepts();
    },[refreshCounter])
    function getAllCoreConcepts(){
        axios.get(`/api/core-concepts`)
        .then((data)=>{
            setConcepts(data.data)
        })
        .catch((err)=>{
            console.log({"err":err})
        })
    }
    function deleteConcept(event){
        // console.log(event.target.value);
        let id = event.target.value
        // let filter = concepts.filter((el)=>el._id != event.target.value)
        // console.log(filter);
        axios.delete(`/api/core-concepts/${id}`)
        .then((data)=>{
            getAllCoreConcepts();
        })
        .catch((err)=>{
            console.log({"err":err})
        })
    }
    return(
        <>
            {concepts.map((el,index)=>{
                return <div title={el.description} key={index}>{el.concept}<button value={el._id} onClick={deleteConcept}>x</button></div>
            })}
        </>
    );
}

export default ViewCoreConcepts
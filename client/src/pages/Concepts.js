import React,{useState} from "react";
import Container from "../components/Container";
import {CreateCoreConcept, ViewCoreConcepts} from "../components/CoreConcepts";
function CoreConceptsPage(){
    const [refreshCounter,updateRefreshCounter] = useState(0)
    function handleCreateConcept(data){
        updateRefreshCounter(refreshCounter+1);
    }
    return (
        <>
            Core Concepts
            <div style={{display:"flex",flexDirection:"row"}}>
                <Container>
                    <CreateCoreConcept handleCreateConcept={handleCreateConcept}/>
                </Container>
                <Container>
                    <ViewCoreConcepts refreshCounter={refreshCounter}/>
                </Container>
            </div>
        </>
    )
}

export default CoreConceptsPage;
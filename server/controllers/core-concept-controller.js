const {CoreConcept} =  require("../models");

const coreConceptController = {
    getAllCoreConcepts(req, res){
        CoreConcept.find({})
        .then((coreConceptData)=>{
            console.log(coreConceptData)
            res.json(coreConceptData);
        })
        .catch((err)=>{
            console.log("[getAllCoreConcepts] Error",err);
            res.status(500).json(err);
        })
    },
    createCoreConcept(req, res){
        CoreConcept.create(req.body)
        .then((coreConceptData)=>{
            console.log(coreConceptData)
            res.json(coreConceptData);
        })
        .catch((err)=>{
            console.log("[createCoreConcept] Error",err);
            res.status(500).json(err);
        })
    },
    removeCoreConcept(req, res){
        CoreConcept.findOneAndDelete({_id:req.params.conceptId})
        .then((coreConceptData)=>{
            console.log(coreConceptData)
            res.json(coreConceptData);
        })
        .catch((err)=>{
            console.log("[createCoreConcept] Error",err);
            res.status(500).json(err);
        })
    }
}

module.exports = coreConceptController;
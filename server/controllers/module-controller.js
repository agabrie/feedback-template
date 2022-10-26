const {Module, CoreConcept} =  require("../models");

const moduleController = {
    getAllModules(req, res){
        Module.find({})
        .then((moduleData)=>{
            console.log(moduleData)
            res.json(moduleData);
        })
        .catch((err)=>{
            console.log("[getAllModules] Error",err);
            res.status(500).json(err);
        })
    },
    createModule(req, res){
        Module.create(req.body)
        .then((moduleData)=>{
            console.log(moduleData)
            res.json(moduleData);
        })
        .catch((err)=>{
            console.log("[createModule] Error",err);
            res.status(500).json(err);
        })
    }
}

module.exports = moduleController;
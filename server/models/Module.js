const {Schema, model} = require('mongoose');

const ModuleSchema = new Schema(
    {
        week:{
            type:String,
            required:true
        },
        project_name:{
            type:String,
            required:true,
        },
        aim:{
            type:String,
            required:true
        },
        core_concepts:[
            {
                type:Schema.Types.ObjectId,
                ref:'CoreConcept'
            }
        ]
    },
    {
        id:false
    }
)

const Module = model('Module',ModuleSchema)

module.exports = Module;
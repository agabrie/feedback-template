const {Schema, model} = require('mongoose');

const CoreConceptSchema = new Schema(
    {
        concept:
        {
            type:String,
            required:true
        },
        description:{
            type:String
        }
    },
    {
        id:false
    }
)

const CoreConcept = model('CoreConcept',CoreConceptSchema)

module.exports = CoreConcept;
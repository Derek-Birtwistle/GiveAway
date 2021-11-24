const mongoose = require('./mongooseDb')

const Provider = mongoose.model('Provider',
    {
        "name": String,
        "address": String,
        "contactInfo":[String],
        "accessLocation":String
    }
)

async function createProvider(providerData){
    let newProvider = new Provider(providerData)
    let createdProvider = await newProvider.save()
    return createdProvider.id
}
async function listProvider(){
    return Provider.find({})
}
async function findById(id){
   return Provider.findById(id)
}
async function updateProvider(id,newData){
    return Provider.findByIdAndUpdate(id,newData)

}
module.exports = {
    createProvider,
    listProvider,
    findById,
    updateProvider
}
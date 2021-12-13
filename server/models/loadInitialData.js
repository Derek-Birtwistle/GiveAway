let providerList = require('./provider.json')
let provdierModel = require('./providerModel')

providerList.forEach(async(provider)=>{
    console.log('Creating provider:',provider.name)
    let createdId = await provdierModel.createProvider(provider)
    console.log('... created with id',createdId)

})
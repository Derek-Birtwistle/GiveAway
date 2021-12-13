const mongoose = require('mongoose')

const dbUrl = 'mongodb+srv://ALPHA-Lamb:alphaLamb@cluster0.i9odw.mongodb.net/giveAway?retryWrites=true&w=majority'
mongoose.connect(dbUrl)

module.exports = mongoose

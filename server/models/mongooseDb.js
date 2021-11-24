const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/giveAway'
mongoose.connect(dbUrl)

module.exports = mongoose

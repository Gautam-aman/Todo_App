const mongoose = require ('mongoose')
//const { string, boolean } = require('zod')

mongoose.connect('use your database')

const todoappschema = mongoose.Schema({
    title : String,
    description : String,
    completed : boolean
})

const todo = mongoose.model('todo', todoappschema)

module.exports= {todo}
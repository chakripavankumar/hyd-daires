const mongoose= require('mongoose')

  mongoose.connect("mongodb+srv://final:Pavan%408096@cluster1.chs19ed.mongodb.net/hyd-todo")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos' ,todoSchema);

module.exports={
    todo
}
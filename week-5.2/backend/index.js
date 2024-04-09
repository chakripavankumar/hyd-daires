const express = require('express');
const cors= require('cors')
const { Addtodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app= express();



app.use(express.json());
app.use(cors())

app.post("/todo" , async function(req,res){
    const  create= req.body
    const combine= Addtodo.safeParse(create)
    if(!combine.success){
    res.status(411).json({
 msg : "please check the input details"
})
return 
}
// put it mongodb
 await todo.create({
    title:create.title,
    description:create.description,
    completed:false
})
res.json({
    msg :"todo created sucefully"
})
})
 app.get("/todos" ,   async function(req,res){
   const todos=  await todo.find({});
   res.json({
    todos
   })
 })
 app.put("/tods" ,  async function (req,res){
    const create= req.body;
    const combine= updateTodo.safeParse(create)
    if(!combine.success){
    res.status(411).json({
   msg :"plesse the input fields"
    })
    return
}
// put it in mongodb
await todo.update({
    _id:req.body.id,
},{
        completed:true
    })
  res.json({
    msg : "todo updated sucefully"
  })
 })

 app.listen(3000 , function(){
  console.log("serrver is sucefully listening in port 3k")
 });
const express = require('express');
const { Addtodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app= express();


app.use(express.json());

app.post("/todo" , async function(res,req){
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
    description:create.description
})
res.json({
    msg :"todo created sucefully"
})
})
 app.get("/todos" ,   async function(res,req){
   const todos=  await todo.find({});
   res.json({
    todos
   })
 })
 app.put("/tods" , function (res,req){
    const create= req.body;
    const combine= updateTodo.safeParse(create)
    if(!combine.success){
    res.status(411).json({
   msg :"plesse the input fields"
    })
    return
}
// put it in mongodb

 })
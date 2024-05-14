const zod= require('zod')

const Addtodo= zod.object({
  title:zod.string(),
  description: zod.string()
})

const updateTodo= zod.object({
    id:zod.string()
})

module.exports= {
 Addtodo,
 updateTodo
} 
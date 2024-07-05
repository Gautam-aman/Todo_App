const express = require('express')
const app = express();
const {createTodo , updatetodo } = require('./types.js')
app.use(express.json());
const {todo} = require('./database');
const { boolean } = require('zod');

app.post('/todo' , async(req,res)=>{
    const createpayload = req.body;
    const parsepayload = createTodo.safeParse(createpayload);
    if (!parsepayload.success){
res.status(403).json({
    message : "You send Wrong Inputs"
})
return;
    }

    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed :{
            type : boolean, 
            default : false
        }
    })
    res.json({
        message : "Todo Created Successfully"
    })
    
})

app.get('/todos', async(req,res)=>{
const todos = await todo.find({});
res.json({
    todos : todos
})
})

app.put('/completed' , async(req,res)=>{
const createpayload = req.body;
const parsepayload = updatetodo.safeParse(createpayload);
if (!parsepayload.success){
    res.status(403).json ({
        message : "You send Wrong inputs"
    })
    return
}

await todo.update({
    _id : req.body.id
},{
    completed : true
})

res.json ({
    message : "todo marked as completed"
})

})

app.listen(3000)
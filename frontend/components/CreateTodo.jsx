import { application } from 'express'
import { useState } from 'react'

export function CreateTodo(){

    const [title , setTitle] = useState("")
    const [desciption , setDescription] = useState("")


    return  <div>
        <input type ="text" placeholder="Title" onChange={function(e){
            //const value = e.target.value;
            setTitle(e.target.value)
        }}></input><br></br>
        <input type ="text" placeholder="Desription" onChange={function(e){
            setDescription(e.target.value);
        }}></input><br></br>

        <button onClick={()=>{
            fetch("https://www.localhost:3000/todos",{
                method:"POST",
                body :JSON.striniyfy({
                    title:title,
                    desciption:desciption
                }),
                headers:{
                    "contentType":"application/json",
                }
            }).then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add Todo</button>
    </div>
}
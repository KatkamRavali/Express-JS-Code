const express = require("express");

const ex = express();
ex.use(express.json());

const port = 8085;

const toDoList = ["Learn" , "Apply" , "Achive" , "Get Success"];

// Root : http://localhost:8085/todos
// ----- Get Method -----
ex.get("/todos" , (req , res) =>{
    res.status(200).send(toDoList)
});

// ----- Post Method -----
ex.post("/todos" , (req , res) =>{
    let newToDo = req.body.name;
    toDoList.push(newToDo);
    res.status(201).send({Message : "Task Added Successfully"});
});

// ----- Put Method -----
ex.put("/todos" , (req , res) =>{
    res.status(200).send("Task completed");
});

// ----- Delete Method -----
ex.delete("/todos" , (req , res) =>{
    const deleteItem = req.body.item;

    toDoList.find((elem , index) => {
        if(elem === deleteItem){
            toDoList.splice(index , 1);
        }
    })
    res.status(202).send({Message : `Deleted item ${req.body.item} Successfully`});
});

// ----- All Methods -----
ex.put("/todos" , (req , res) =>{
    res.status(501).send({Message : "Successful"});
});

ex.listen(port , () => {
    console.log(`NodeJS server with express started running at Port ${port}`);
})
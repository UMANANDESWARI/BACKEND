const getStudents = (req,res)=>{
    // get data
    console.log("data is fetched")
    let stddata = {name:"uma", technology:"FSD"};
    res.status(200).json({data : stddata});
}

const addStudents = (req,res) =>{
    //add data
    let stddata = req.body;
    console.log(stddata);
    res.status(201).json({message: "Data is added"});
}

const editStudents = (req,res)=>{
    // edit data
    let stddata = req.body;
    console.log("Editing student's data");
    res.status(203).json({message : "Data is edited"});
}

const deleteStudents = (req,res)=>{
    // edit data
    let stddata = req.body;
    console.log("Deleting student's data");
    res.status(203).json({message : "Data is deleted"});
}

export  {getStudents, addStudents, editStudents, deleteStudents} ;
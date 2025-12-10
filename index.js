// import http from "http";
// const server = http.createServer((req, res) => {
// res.writeHead(200,{"Content-Type": "text/plain"});
// res.end("hello this is from backend")
// });

// server.listen(7007, () => {
// console.log('server running at port ${7007}')
// });

//------------------------------------------------------

// import http from "http";
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     if(req.url === "/users"){
//         res.writeHead(200,{"Content-Type": "application/json"});
//         res.end(JSON.stringify({name: "thub"}))
//     }
//     else{
//         res.writeHead(200,{"Content-Type": "text/plain"});
//         res.end("hello this is from backend")
//     }
// });

// server.listen(4000, () => {
// console.log(`server running at port ${4000}`)
// });

//------------------------------------------------------

// import express from 'express';
// const app =express();

// //middleware
// app.use(express.json());
// app.get('/',(req,res)=>{
//     console.log("hello umaaaa")
//     res.send("Api Success");
// })
// app.post('/add-user',(req,res)=>{
//     let data=req.body;
//     console.log(data);
//     //logic to add data into your data base
//     res.send("data added");
// });
// app.listen(7001,()=>{
//     console.log("Server  running at port 7000");
// })

//------------------------------------------------------


import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req,res) =>{
    res.send("Hello from backend");
})

app.post('/add-user',(req,res)=>{
    let mydata = req.body;
    console.log(mydata)
    res.send("data is added");
})

app.put('/update-user',(req,res)=>{
    let mydata = req.body;
    console.log(mydata)
    res.send("data is updated");
})

app.delete('/delete-user',(req,res)=>{
    let mydata = req.body;
    console.log(mydata)
    res.send("data is deleted");
})

app.listen(7001,()=>{
    console.log(`server is running at port ${7001}`);
})
const PORT=8000;

const express=require("express");
const cors=require("cors");

const app=express();

app.use(express.json())
app.use(cors())

const API_KEY= process.env.API_KEY


app.post('/completions',async (req,res)=>{
   
    const options={
        method:'POST',
        headers: {
            "authorization":`Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            
            messages: [{role: "user",content: req.body.messages[0].content}],
            max_tokens: 100
        }) 
    }
    

    try{
         const response= await fetch('https://api.openai.com/v1/chat/completions',options);
         const data = await response.json();
         res.send(data)
    }
    catch(err){
        console.error(err);
    }
    console.log(req.body.messages[0].content)
})


app.listen(PORT,()=>console.log("Server is running on port : ",PORT))

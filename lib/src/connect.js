const express = require('express');
const app = express()
const connection = (port=1080||1000, default_route="/", logging=true) => 
{
    try{
    app.get(default_route, (req,res)=>
    {
        res.send("TEST");
    }
    )

    app.listen(port, ()=>{
        if(logging)
        {
            console.log(`Its Live! http://localhost:${port}${default_route} !`)
        }
    });
    }
    catch(e){
        console.log(e)
    }

}

exports.connection = connection
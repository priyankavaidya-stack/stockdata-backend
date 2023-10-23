const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
const {generateMockData:mockDataGenerator} = require("./mockDataGenerator")


// Enable all CORS requests
app.use(cors());

app.get('/api/search', async(req,res)=>{
    console.log("sesd");
    let {symbol,period}= req.query;

    if(period === "hourly"){
        period = "60min";
    }
   
    const mockData = await mockDataGenerator(symbol, period);
    res.json(mockData);
});

// const port = process.env.PORT || 8001;
const port = 8081;
app.listen(port,()=>{
   console.log(`Server is listening on  ${port}`)
});
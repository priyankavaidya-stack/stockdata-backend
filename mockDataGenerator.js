async function generateMockData(symbol, period) {
    console.log(`mock data generating function ${symbol},${period}`);
  
    if(period === "daily"){
      url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=${period}&apikey=${process.env.KEY}`;
    }else{
      url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${period}&apikey=${process.env.KEY}`;
    }
    const data = await fetch(url);
    const jsonresponse = await data.json();
    console.log(jsonresponse);
    return jsonresponse;
  }
  
  module.exports = { generateMockData };
  
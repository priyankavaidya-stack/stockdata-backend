# Stock Data Project Backend

This is the backend for the Stock Data Project. It provides the necessary server-side functionalities for handling requests and data processing.

## Features

- Exposes RESTful APIs to handle stock data requests.
- Used Express.js backend integrates with the Alpha Vantage API to fetch stock market data.
- Error Handling : Handled all possibe errors gracefully.
- Response Structure: Fetched datapoints a/c to the requirement of the lightweight chart .

## Technologies Used

- **Express.js :** Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It was used to develop the server-side functionality and handle HTTP requests and responses efficiently.

- **CORS :** CORS (Cross-Origin Resource Sharing) is an essential mechanism that allows resources on a web page to be requested from another domain. It was implemented to enable cross-origin requests and enhance the security of our application.

- **dotenv :** dotenv is a zero-dependency module that loads environment variables from a .env file into the process.env. It was used to manage sensitive data and configuration settings within the application environment.

- **Alpha Vantage API :** The Alpha Vantage API was leveraged to retrieve real-time and historical stock market data. It provided the necessary financial data to populate our application and power various features related to stock market analysis and visualization.


## Getting Started

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables.

### Running the Server

To start the server, run: `node app.js`


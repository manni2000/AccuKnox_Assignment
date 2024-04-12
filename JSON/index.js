
// 1. Create a separate route called search and show the list of color cards from the JSON, we will attach the JSON for that,

// 2. Have a simple search functionality for the list:

// Sample JSON
// [
// {
// color: "red",
// value: "#f00"
// },
// {
// color: "green",
// value: "#0f0"
// },
// {
// color: "blue",
// value: "#00f"
// },
// {
// color: "cyan",
// value: "#0ff"
// },
// {
// color: "magenta",
// value: "#f0f"
// },
// {
// color: "yellow",
// value: "#ff0"
// },
// {
// color: "black",
// value: "#000"
// }
// ]

// Code:

import express from "express";
const app = express();
const port = 3000;

const value_array = [
  {
    color: "red",
    value: "f00"
  },
  {
    color: "green",
    value: "0f0"
  },
  {
    color: "blue",
    value: "00f"
  },
  {
    color: "cyan",
    value: "0ff"
  },
  {
    color: "magenta",
    value: "f0f"
  },
  {
    color: "yellow",
    value: "ff0"
  },
  {
    color: "black",
    value: "000"
  }
]

app.get("/", (req, res) => {
  res.send("Hello AccuKnox!")
})

app.post("/search", (req, res) => {
  try
  {
    const value = "r" // Hardcoded search value "r"
    let result = value_array.filter((val) => val.color.includes(value))
    res.status(200).json(result)
  }
  catch(err)
  {
    console.log(err)
    res.status(500).json(err)
  }
});

app.listen(port, () => {
  console.log(`AccuKnox listening on port ${port}`);
});


// Expected Output:

// Accessing http://localhost:3000/ in a web browser or using a tool like Postman will display Hello AccuKnox! as the response.
// Sending a POST request to http://localhost:3000/search will filter the value_array based on the hardcoded search term "r",
// (e.g., searching for colors containing "r" in their names like "red" or "green").
// The response will be a JSON array of matching color objects.


import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
var myHeaders = new Headers();
myHeaders.append("x-access-token", "openuv-3z3q3qrmfdgidwh-io");
myHeaders.append("Content-Type", "application/json");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
// app.get("/", async (req, res) => {

// var myHeaders = new Headers();
// myHeaders.append("x-access-token", "openuv-3z3q3qrmfdgidwh-io");
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.openuv.io/api/v1/uv?lat= -27.470125&lng= 153.021072&alt=100&dt=", requestOptions)
//   .then(response => response.text())
//   .then(console.log(response.text))
// //  .then(result => console.log(result))
//   .then(res.render("index.ejs" ,{
//         data: result,

//     }))
//   .catch(error => console.log('error', error));
// });

app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.openuv.io/api/v1/uv?lat= -27.470125&lng= 153.021072&alt=100&dt=",{
     
//   headers: {
//     "x-access-token":"openuv-3z3q3qrmfdgidwh-io",

//   }
// }
//     );
//     const result = response.data;
//     console.log(result);
    

   
//     res.render("index.ejs", { data:result });
//   } 
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any"
    );
    const result = response.data;
    console.log(result);
    

   
    res.render("index.ejs", { data:result });
  }
  catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

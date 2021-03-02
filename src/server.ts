import express, { response } from "express";

const app = express();

app.listen(3333, () => console.log("Server is running!"));

app.get("/", (request, response) => {
    return response.json({"message": "Hello World!"});
})

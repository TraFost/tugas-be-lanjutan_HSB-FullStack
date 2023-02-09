const express = require("express");
const cors = require("cors");

const app = express();

const corOptions = {
  origin: "http://localhost:3000",
};

// middlewares

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routers

const router = require("./routes/productRouter.js");

app.use("/products", router);

//testing api

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// port

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

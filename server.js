const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const meetDetails = require("./routes/meetings.js");
const connectDB = require("./database/connection.js");

const app = express();

dotenv.config({ path: "./config/config.env" });


app.use(bodyParser.json());
app.use(morgan("tiny"));

connectDB();

//routes
app.use("/meet-details", meetDetails);

//welcome message
app.get("/", (req, res) => {
	res.send("MayaMeetApp welcomes you");
});

//serve static assets for production
if (process.env.NODE_ENV === "production") {
	app.use(express.static('client1/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname,'client','build','index.html'))
	})
}


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});

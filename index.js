const app = require("express")();
const cors = require('cors');
const mongoose = require("mongoose");
const attorneys = require("./routes/attorney.routes");
const users = require("./routes/users.routes");
const dashboard = require("./routes/dashboard.routes");
const post = require("./routes/post.routes");


const bodyPaser = require("body-parser");
require("dotenv").config();
app.use(bodyPaser.urlencoded({extended: true}));
app.use(bodyPaser.json({limit: "60mb"}));
app.use(cors());
app.use("/users", users);
app.use("/attorneys", attorneys);
app.use("/dashboard", dashboard);
app.use("/post", post);



const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

mongoose.connect(URI, (err) => {
    if(err) {
        console.log("Error connecting to the database");
    } else {
        console.log("Connection to the database established");
    }
})

app.listen(PORT, () => console.log(`Port ${PORT} has started`))

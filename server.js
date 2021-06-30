//* import and create app
require('dotenv-safe').config();
const express = require('express');
const moongoose = require('mongoose');
const app = express();
const userData = require('./controllers/data_controller');
const seedData = require('./controllers/seed_controllers')

//* connect to mongoose
const MONGO_URI = process.env.MONGO_URI
moongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
moongoose.connection.once("open", () => {
    console.log('connected to mongo: ' + MONGO_URI)
})

//* middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//* defining the endpoints
app.use("/data", userData);
app.use("/seed", seedData)

//* port listening
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊")
})
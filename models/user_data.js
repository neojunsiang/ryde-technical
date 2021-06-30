//* initialise and setting up user_data schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//* defining the schema for the mongodb
const userDataSchema = new Schema(
    {
        name: { type: String, required: true },
        dob: { type: Date, required: true, min: "1900-01-01" },
        address: { type: String, required: true },
        description: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    }
)

//* instantiate the model 
const UserData = mongoose.model("UserData", userDataSchema);

//* export module
module.exports = UserData;
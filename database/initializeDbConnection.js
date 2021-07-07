const mongoose = require('mongoose');

async function initializeDbConnection() {
    try{
        await mongoose.connect("mongodb+srv://rawheat:CGekQOXgxVyZLxXj@nftbazar.z2do5.mongodb.net/nftask", {useNewUrlParser: true, useUnifiedTopology: true})

        console.log("Successfully connected to Monogo")
    }catch(error){
        console.error("Mongoose connection failed...", error)
    }
}

module.exports = { initializeDbConnection }
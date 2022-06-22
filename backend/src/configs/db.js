require("dotenv").config();
const mongoose = require("mongoose");

module.exports  = ()=> {
   return mongoose.connect("mongodb://khushboo:khushi217@cluster0-shard-00-00.3pmsq.mongodb.net:27017,cluster0-shard-00-01.3pmsq.mongodb.net:27017,cluster0-shard-00-02.3pmsq.mongodb.net:27017/movies?ssl=true&replicaSet=atlas-cng05c-shard-0&authSource=admin&retryWrites=true&w=majority");
}
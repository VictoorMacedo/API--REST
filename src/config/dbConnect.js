import mongoose from "mongoose";

mongoose.connect("mongodb+srv://@node-express.deswh.mongodb.net/node-express");

let db = mongoose.connection;

export default db;
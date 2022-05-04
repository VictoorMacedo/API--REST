import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Victor-Macedo:0507@node-express.deswh.mongodb.net/node-express");

let db = mongoose.connection;

export default db;
import mongoose from "mongoose";
const Schema = mongoose.Schema;


const InfoSchema = new Schema({title: String, path: String, data: String}, {collection: "info"});
const Info = mongoose.model("Page", InfoSchema);

export default Info;
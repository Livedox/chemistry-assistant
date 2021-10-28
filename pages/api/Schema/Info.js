import mongoose from "mongoose";
let Info;
try{
    const Schema = mongoose.Schema;

    const InfoSchema = new Schema({title: String, path: String, data: String}, {collection: "info"});
    Info = mongoose.model("Page", InfoSchema);
} catch(e) {
    console.log(e);
}
export default Info;

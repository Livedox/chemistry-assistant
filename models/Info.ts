import mongoose from "mongoose";

export interface IInfo {
    title: string;
    path: string;
    data: string;
}

const Schema = mongoose.Schema;

const InfoSchema = new Schema<IInfo>({title: String, path: String, data: String}, {collection: "info"});
const Info: mongoose.Model<IInfo, {}, {}, {}> = mongoose.models.Info || mongoose.model("Info", InfoSchema);

export default Info;

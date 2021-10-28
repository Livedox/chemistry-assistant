import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Info from "./Schema/Info";

export default async (req, res) => {
    try{
        mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uu2gr.mongodb.net/${process.env.DB_BASE}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        res.statusCode = 200;
        Info.findOne({path: req.body.id ?? "Zn"}, function(err, doc){
            if(err) return console.log(err);
            res.json({data: doc});
        });
    } catch(e) {
        res.json({data: {title: "ошибка", body: "Ошибка"}});
        console.log(e);
    }
}

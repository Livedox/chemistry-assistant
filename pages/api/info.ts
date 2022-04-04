import Info from "../../models/Info";
import connectDB from "../../middleware/mongodb";
import {NextApiRequest, NextApiResponse} from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const id: string = JSON.parse(req.body)["id"];
    try {
        Info.findOne({path: id}, (error: Error, information: any) => {
            if(error) {
                res.status(500).send({message: "Server error"});
                res.end();
            }
            if(information) {
                res.status(200).send({title: information.title, path: information.path, data: information.data});
                res.end();
            } else {
                res.status(404).send({ message: "Page not found" });
                res.end();
            }
        });
        return;
    } catch (error) {
        res.status(500).send({message: "Server error"});
        res.end();
        return;
    }
};
  
export default connectDB(handler);

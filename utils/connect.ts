import { connect } from "http2";
import {MongoClient} from "mongodb"
const mongoUrl:any = process.env.MONGO_URL
let client:any = null;
export async function connectDB(){
if(client){
    return client;
}

if(!mongoUrl){
    console.log("url not found")
}

try{
    client = await MongoClient.connect(mongoUrl)
    console.log("succesfull")
    return client;
}catch(error){
    console.log("error conceting to database " + error)

}
}
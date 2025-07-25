import axios from "axios";
import { env } from "../env";

const {VITE_BIN_ID, VITE_BIN_SECRET_KEY} = env

const url = `https://api.jsonbin.io/v3/b/${VITE_BIN_ID}`
const headers= {'X-Master-Key': `${VITE_BIN_SECRET_KEY}`, "Content-Type": "application/json",}

export async function getData(){
    const { data } = await axios.get(url+"/latest", {headers: headers})

    return data
}

export async function updateData(current: any){
    await axios.put(url, { visits: current + 1 }, {headers: headers})
}


import { useEffect, useRef, useState } from "react";
import Text from "../components/text";
import SmileSad from "../assets/icons/smiley-sad.svg?react"
import axios, { type AxiosResponse } from "axios";
import { env } from "../env";


export default function VisitsCounter() {
  const [count, setCount] = useState<number | null>(null)
  const hasCounted = useRef(false)

  const {VITE_DEVELOP} = env

  useEffect(() => {

    if (hasCounted.current) return
    hasCounted.current = true

    async function visitisCount(){
      let response: AxiosResponse
      
      if(!"true".includes(VITE_DEVELOP.toLocaleLowerCase())){
        response = await axios.put("http://localhost:3333/visitantes")
        setCount(response.data.count)
        
      }else{
        response = await axios.get("http://localhost:3333/visitantes")
        setCount(response.data.count)
      }

    }

    visitisCount()
  }, [])


  return (
    <span className="text-sm text-center text-gray-200 ml-auto">
      {count !== null ? 
        (<Text className="flex items-center border-l-2 m-l-1 pl-1">{count} visitas</Text>) : 
        (<SmileSad className="fill-gray-200"/>)}
    </span>
  );
}

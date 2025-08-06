import { useEffect, useState } from "react";
import { getData, updateData } from "../services/jsonbin";
import Text from "../components/text";
import SmileSad from "../assets/icons/smiley-sad.svg?react"
import { env } from "../env";

export default function AccessCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  const {VITE_DEVELOP} = env

  useEffect(() => {
    const fetchAndUpdateVisits = async () => {
      try {
        
        const data = await getData();
        const current = data.record.visits || 0;

        if(!"true".includes(VITE_DEVELOP.toLocaleLowerCase())){
          // console.log("Ambiente de Produção!")
          await updateData(current)
          setVisits(current + 1);
        }else{
          setVisits(current)
        }

      } catch (err) {
        console.error("Erro ao acessar contador:", err);
      }
    };

    fetchAndUpdateVisits();
  }, []);

  return (
    <span className="text-sm text-center text-gray-200 ml-auto">
      {visits !== null ? 
        (<Text className="flex items-center border-l-2 m-l-1 pl-1">{visits} visitas</Text>) : 
        (<SmileSad className="fill-gray-200"/>)}
    </span>
  );
}

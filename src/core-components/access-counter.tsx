import { useEffect, useState } from "react";
import { getData, updateData } from "../services/jsonbin";
import Text from "../components/text";
import Eye from "../assets/icons/eyes.svg?react"
import SmileSad from "../assets/icons/smiley-sad.svg?react"
import Icon from "../components/icon";


export default function AccessCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const fetchAndUpdateVisits = async () => {
      try {
        
        const data = await getData();
        const current = data.record.visits || 0;

        await updateData(current)

        setVisits(current + 1);
      } catch (err) {
        console.error("Erro ao acessar contador:", err);
      }
    };

    fetchAndUpdateVisits();
  }, []);

  return (
    <p className="text-sm text-center text-gray-500 mt-2">
      {visits !== null ? 
        (<div className="flex items-center h-8 w-8"><Text>{visits}</Text><Icon svg={Eye}/></div>) : 
        (<SmileSad/>)}
    </p>
  );
}

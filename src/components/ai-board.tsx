import { useState } from "react";
import Button from "./button";
import RobotIcon from "../assets/icons/robot.svg?react"
import SentIcon from "../assets/icons/sent.svg?react"
import NoSignalIcon from "../assets/icons/noSignal.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import axios from "axios";
import z from "zod";
import Icon from "./icon";
import Text from "./text";
import { env } from "../env";
import { useServerStatus } from "../contexts/server-status-context";

const questionSchema = z.object({
  question: z.string().min(5, { message: "A pergunta deve ter pelo menos 5 caracteres." }),
});

export default function AiBoard() {
  const [aberto, setAberto] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

   const { serverOnline } = useServerStatus();

  const {VITE_URL_SERVER, VITE_DEVELOP} = env

  let url: string

  if(!"true".includes(VITE_DEVELOP.toLocaleLowerCase())){
    url = VITE_URL_SERVER
  }else{
    url = "http://localhost:3333"
  }

  function handlerAberto(){
    setAberto(!aberto)
    setQuestion("")
    setResponse("");
  }

  function aiIsOff(){
    return serverOnline !== true
  }

  async function handleSubmit( e: React.FormEvent){
    e.preventDefault();
    const validation = questionSchema.safeParse({question})


    if(!validation.success){
      const errorMessage = validation.error.issues[0]?.message;
      setResponse(errorMessage);
      return;
    }
    if (!question.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(`${url}/perguntar`, {
        pergunta: question,
      });

      setResponse(res.data.resposta || "Sem resposta.");
      } catch (err) {
        setResponse("Erro ao se comunicar com o servidor.");
      } finally {
        setLoading(false);
    }
  }
  return (
    <div className="relative inline-block text-left">

      <Button 
        iconClassName="fill-white w-12 h-12 md:w-20 md:h-20 p-1" 
        className={`${!aiIsOff() ? "bg-blue/80 rounded-lg shadow-blue":"bg-red/80 rounded-lg shadow-red"}  
          cursor-pointer`
        } 
        icon={RobotIcon} 
        onClick={handlerAberto}
      />


      {aberto && (
        <div className="bottom-full right-0 mb-2 md:w-2xl px-1
                      origin-bottom-right bg-gray-400
                      shadow-xl ring-1 ring-black/10 rounded-md
                      absolute z-0 p-6 overflow-hidden"
        >
          {
            aiIsOff() ? 
              <Text className="flex flex-col w-44 justify-center items-center">
                <Icon className="col-span-2 fill-red"svg={NoSignalIcon}/> 
                <span className="flex flex-col justify-center items-center p-0.5">
                  <b className="text-red">IA Off</b>
                  <p className="text-justify text-white">Atualize a página ou agurde um instante</p>
                </span>
              </Text>
                : 
              <div className="mx-2">
                <h1 className="text-2xl text-white font-bold mb-4">Olá, visitante</h1>
                <form onSubmit={handleSubmit} className="flex gap-1 min-w-80">
                  <input
                    id="question"
                    name="question"
                    type="text"
                    className="flex-1 border rounded px-3 py-2 text-white placeholder-white"
                    placeholder="Pergunte algo sobre o imóvel..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                  <Button
                    type="submit"
                    className="px-1 py-1 rounded cursor-pointer hover:bg-gray-100 bg-white"
                    iconClassName="fill-gray-500"
                    icon={SentIcon}
                    disabled={loading}
                  />
                </form>
                <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 py-3 rounded">
                  {
                    loading && 
                      <Text className="flex items-center gap-1 text-white">
                        <Icon className="animate-spin fill-white" svg={SpinnerIcon}/>
                        <p className="text-gray-500 italic">Aguarde a resposta...</p>
                      </Text> 
                  }
                  {
                    !loading && 
                    response &&
                      <Text as="p" className="whitespace-pre-wrap text-white text-justify">
                        {response}
                      </Text>
                  }
                </div>
              </div>
          }

        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import Button from "./button";
import WhatsappIcon from "../assets/icons/whatsapp.svg?react"
import ContactUs from "./contact";

interface Contato {
    phone: string; // ex: "WhatsApp", "Telefone", "E-mail"
    msg: string;
  }
  
  interface DropdownContatosProps {
    contatos: Contato[];
  }
  
  export default function DropdownContatos({ contatos }: DropdownContatosProps) {
    const [aberto, setAberto] = useState(false);

    function handlerAberto(){
      setAberto(!aberto)
    }
  
    return (
      <div className="relative inline-block text-right">

        <Button 
          iconClassName="fill-white w-12 h-12 md:w-20 md:h-20 
            p-1" 
          className=" bg-green-light/80 rounded-lg shadow-green-bold cursor-pointer" 
          icon={WhatsappIcon} 
          onClick={() => setAberto(!aberto)}
        />
  
        {aberto && (
          <div className="absolute bottom-full right-0 mb-2 w-56 
              origin-bottom-right rounded-md bg-gray-100/90 
              shadow-xl ring-1 ring-black/10 border border-gray-200
              "
          >
            
              {contatos.map((contato, index) => (

                <ContactUs onClick={handlerAberto} key={index} phone={contato.phone} msg={contato.msg}/>
              ))}
            
          </div>
        )}
      </div>
    );
  }
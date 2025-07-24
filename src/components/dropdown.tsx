import { useState } from "react";
import Button from "./button";
import WhatsappIcon from "../assets/icons/whatsapp.svg?react"
import ContactUs from "./contact";

interface Contato {
    phone: string | any; // ex: "WhatsApp", "Telefone", "E-mail"
    msg: string;
  }
  
  interface DropdownContatosProps {
    contatos: Contato[];
  }
  
  export default function DropdownContatos({ contatos }: DropdownContatosProps) {
    const [aberto, setAberto] = useState(false);
  
    return (
      <div className="relative inline-block text-left">

        <Button iconClassName="fill-green-light" className=" bg-gray-100 rounded-2xl" icon={WhatsappIcon} onClick={() => setAberto(!aberto)}/>
        {/* <button
          onClick={() => setAberto(!aberto)}
          className="bg-purple-bold text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition"
        >
          Contatos
        </button> */}
  
        {aberto && (
          <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
            
              {contatos.map((contato, index) => (

                <ContactUs key={index} phone={contato.phone} msg={contato.msg}/>
                // <li
                //   key={index}
                //   className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                // >
                //   <span className="font-semibold">{contato.tipo}:</span> {contato.valor}
                // </li>
              ))}
            
          </div>
        )}
      </div>
    );
  }
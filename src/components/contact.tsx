import Icon from "./icon";
import Whatsapp from "../assets/icons/whatsapp.svg?react";

export default function ContactUs() {
  const { VITE_CONTATO_1 } = import.meta.env;
  return (
    <a
      href={`https://wa.me/${VITE_CONTATO_1}?text=Olá%2C+tenho+interesse+no+imóvel`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-black px-4 py-2 rounded flex items-center gap-2"
    >
      <Icon className="fill-green-light" svg={Whatsapp} />
      Falar com o proprietário
    </a>
  );
}

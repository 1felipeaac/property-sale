import Icon from "./icon";
import Text from "./text";
import Whatsapp from "../assets/icons/whatsapp.svg?react";

interface ContactUsProps {
  phone: string;
  msg: string;
}

export default function ContactUs({ phone, msg }: ContactUsProps) {
  return (
    <a
      href={`https://wa.me/${phone}?text=Olá%2C+tenho+interesse+no+imóvel`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-black px-4 py-2 rounded flex items-center gap-2"
    >
      <Icon className="fill-green-light" svg={Whatsapp} />
      <Text as="p">{msg}</Text>
    </a>
  );
}

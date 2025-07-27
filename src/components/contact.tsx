import Text from "./text";
import Whatsapp from "../assets/icons/whatsapp.svg?react";
import Icon from "./icon";

export interface ContactUsProps {
  phone: string;
  msg: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export default function ContactUs({ phone, msg, onClick }: ContactUsProps) {
  return (
    <a
      href={`https://wa.me/${phone}?text=Olá%2C+tenho+interesse+no+imóvel`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="bg-white uppercase text-green-bold px-4 py-2 rounded flex items-center gap-2"
    >
      <Icon svg={Whatsapp} className="fill-green-light"/>
      <Text as="p">{msg}</Text>
    </a>
  );
}

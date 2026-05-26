
import { OpenWeather } from "../components/open-weather";
import {House} from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        
        {/* LADO ESQUERDO: "Logo" ou Identificação */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-xl shadow-md">
            <House className="w-5 h-5 fill-current" />
          </div>
          <span className="font-heading font-bold text-lg md:text-xl text-slate-900 tracking-tight">
            IMÓVEL À VENDA
          </span>
        </div>

        {/* LADO DIREITO: Widget de Clima */}
        <div className="flex items-center">
          <OpenWeather />
        </div>

      </div>
    </header>
  );
}

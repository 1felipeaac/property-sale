import Neighborhood from "../assets/icons/map-pin.svg?react";
import { location } from "../utils/lists";


export default function LocationList() {
  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-card border border-slate-200 overflow-hidden">
      
      {/* Cabeçalho de Destaque usando a cor Indigo */}
      <div className="p-6 bg-indigo-50 border-b border-indigo-100 flex items-start gap-4">
        <Neighborhood className="w-8 h-8 fill-indigo-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-indigo-900 font-heading font-semibold text-lg">Endereço</h3>
          <p className="text-indigo-700 font-sans">Travessa Aquiles Lisboa, 501 - Bairro Mangueira</p>
        </div>
      </div>

      {/* Lista com divisórias subtis */}
      <ul className="flex flex-col divide-y divide-slate-100 px-6">
        {location.map((local) => (
          <li
            className="flex items-center justify-between py-4"
            key={local.refer + local.distance}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-600 rounded-full border border-slate-100">
                 <local.icon_refer className="w-5 h-5 fill-current" />
              </div>
              <span className="text-slate-700 font-sans font-medium text-sm md:text-2xl break-words block">{local.refer}</span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500">
              <local.icon_distance className="w-4 h-4 fill-current opacity-70" />
              <span className="text-sm font-sans font-medium">{local.distance}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
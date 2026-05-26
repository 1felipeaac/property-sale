import RobotIcon from "../assets/icons/robot.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";
import FaxadaImg from "../assets/faxada.png";

export default function Hero() {
  const scrollToDetails = () => {
    document.getElementById("visao-geral")?.scrollIntoView({ behavior: "smooth" });
  };

  const statusVenda = [
    {status: "Pronto para Morar", color: "bg-emerald-600"},
    {status: "Em Negociação", color: "bg-amber-400"},
    {status: "Vendido", color: "bg-rose-600"},
  ]

  const statusAtual = statusVenda[1];

  return (
    <section className="w-full bg-white pt-8 pb-16 px-4 flex justify-center border-b border-slate-100">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-12 mt-4 md:mt-8">
        
        <div className="flex-1 flex flex-col items-start text-left">
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 rounded-full mb-6">
            Bairro Mangueira, Timon
          </span>

          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-none mb-4">
            Seu novo lar em uma das melhores áreas da cidade.
          </h1>
        
          <p className="text-base text-slate-600 font-sans leading-relaxed mb-8 max-w-md">
            Uma residência exclusiva projetada para oferecer espaço e bem-estar para você e sua família. Explore os detalhes ou converse com nosso assistente virtual.
          </p>

  
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToDetails}
              className="flex items-center justify-center gap-2 px-6 h-12 font-sans font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-all cursor-pointer group"
            >
              Ver Detalhes
              <ArrowRight className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="hidden sm:flex items-center gap-2 text-sm text-indigo-600 font-medium bg-indigo-50/50 border border-indigo-100 px-4 rounded-xl py-2">
              <RobotIcon className="w-5 h-5 fill-current animate-pulse" />
              <span>Dúvidas? Use nosso Chat IA abaixo!</span>
            </div>
          </div>

        </div>

        <div className="flex-1 w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-card bg-slate-100 group">
            <img 
              src={FaxadaImg} 
              alt="Fachada do Imóvel" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            {/* Tag de Status na Foto */}
            <span className={`absolute top-4 right-4 ${statusAtual.color} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm`}>
              {statusAtual.status}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
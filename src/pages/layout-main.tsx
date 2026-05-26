import ListDetails from "../components/list-details";
import LocationList from "../components/location-list";
import MapLeaflet from "../components/maps-leaflet";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import DropdownContatos from "../components/dropdown";
import Carousel from "../components/carousel";
import { contatosList } from "../utils/lists";
import AiBoard from "../components/ai-board";
import Hero from "../components/hero";

export default function LayoutMain() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-600">
      <Header />
      
      <main className="flex-1 flex flex-col w-full items-center pb-16">
        
        {/* 1. NOVO HERO PRINCIPAL (Fundo Branco, Split Layout) */}
        <Hero />

        {/* 2. VISÃO GERAL (Card com os detalhes do Imóvel) */}
        <section id="visao-geral" className="w-full px-4 mt-12 flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-card border border-slate-200 p-6 md:p-8">
            <ListDetails />
          </div>
        </section>

        {/* 3. GALERIA DE FOTOS (O Carrossel realocado em formato de Card Consistente) */}
        <section className="w-full px-4 mt-8 flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-card border border-slate-200 p-4 md:p-6">
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 px-2">
              Galeria do Imóvel
            </h3>
            <div className="rounded-lg overflow-hidden bg-slate-100">
              <Carousel /> 
            </div>
          </div>
        </section>

        {/* 4. MAPA E LOCALIZAÇÃO */}
        <section className="w-full px-4 mt-8 flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-card border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row gap-8 md:gap-12">
            
            {/* Texto de Localização */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Localização Privilegiada
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Explore os arredores e descubra tudo o que este bairro incrível tem a oferecer para a sua rotina.
              </p>
              <LocationList />
            </div>

            {/* Mapa Leaflet */}
            <div className="flex-1 md:min-h-[350px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <MapLeaflet />
            </div>

          </div>
        </section>
      </main>

      {/* FLOAT BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AiBoard />
        <DropdownContatos contatos={contatosList}/>
      </div>

      <Footer />
    </div>
  );
}
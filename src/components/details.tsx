import type React from "react"

interface DetailsProps extends React.ComponentProps<"svg">{
    svg: React.FC<React.ComponentProps<"svg">> 
    title?: string
    description?: string
}

export default function Details({svg: SVGComponent, title, description, className, ...props}:DetailsProps){
    return(
        <div className="flex gap-4 items-center">
            {/* Novo design do ícone: Fundo suave e cor forte, sem bordas pesadas */}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full">
                <SVGComponent className={`w-6 h-6 fill-current ${className}`} {...props}/>
            </div>
            <div className="flex flex-col">
                {/* Título com a nova fonte geométrica (font-heading) */}
                <span className="text-lg md:text-2xl font-heading font-bold text-slate-900 leading-none">{title}</span>
                <span className="text-sm text-slate-500 font-sans font-medium uppercase tracking-wider mt-1">{description}</span>
            </div>
        </div>
    )
}
import type React from "react"

interface DetailsProps extends React.ComponentProps<"svg">{
    svg: React.FC<React.ComponentProps<"svg">> 
    title?: string
    description?: string
}

export default function Details({svg: SVGComponent, title, description, className, ...props}:DetailsProps){

    return(
        <div className="flex gap-2 items-center">
            <SVGComponent className={className} {...props}/>
            <span>
                <h2>{title}</h2>
                <p>{description}</p>
            </span>
        </div>
    )
}
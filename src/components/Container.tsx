import React from "react";

interface ContainerProps extends React.ComponentProps<"div">{
    as?: keyof React.JSX.IntrinsicElements
}

export default function Container({
    as = "div",
    children,
    className,
    ...props
}:ContainerProps){
    return React.createElement(
        as,
        {
            className: "h-screen flex justify-center items-center",
            ...props
        },
        children
    )
}
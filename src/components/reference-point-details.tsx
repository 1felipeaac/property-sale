import Icon from "./icon";
import Text from "./text";

interface ReferncePointDetailsProps extends React.ComponentProps<"div">{
    svg: React.FC<React.ComponentProps<"svg">>
    children?: React.ReactNode 
    as?: keyof React.JSX.IntrinsicElements;
}

export default function ReferencePointDetails({svg, as, children, className,...props}:ReferncePointDetailsProps){

    return(
        <div className={className} {...props}>
            <Icon svg={svg}/>
            <Text as={as}>
                {children}
            </Text>
        </div>
    )
}
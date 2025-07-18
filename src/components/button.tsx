import Icon from "./icon"
import Text from "./text"

interface ButtonProps 
    extends React.ComponentProps<"button">{
    icon?: React.ComponentProps<typeof Icon>["svg"]

}

export default function Button({
    className,
    children,
    icon,
    ...props
}: ButtonProps){

    return (
    <button className={className} {...props}>
        {icon && (
            <Icon
                svg={icon}
                className={className}
            />
        )}
        <Text
        >
            {children}
        </Text>
    </button>)
}
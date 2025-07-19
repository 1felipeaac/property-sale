import Icon from "./icon";
interface ButtonProps extends React.ComponentProps<"button"> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  iconClassName?: string;
}

export default function Button({
  className,
  children,
  iconClassName,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button className={className} {...props}>
      {icon && <Icon svg={icon} className={iconClassName} />}
      {children}
    </button>
  );
}

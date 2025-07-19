import Icon from "./icon";
import Text from "./text";
import ReferencePointDetails from "./reference-point-details";

interface LocationDetaislProps {
  svg: React.FC<React.ComponentProps<"svg">>;
  text: string;
  className?: string;
  iconClassName?: string;
}

export default function LocationDetails({
  svg,
  className,
  iconClassName,
  text,
  ...props
}: LocationDetaislProps) {
  return (
    <ReferencePointDetails className={className} {...props}>
      <Icon className={iconClassName} svg={svg} />
      <Text>{text}</Text>
    </ReferencePointDetails>
  );
}

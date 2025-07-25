interface IconProps extends React.ComponentProps<"svg"> {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}
export default function Icon({
  svg: SvgComponent,
  className,
  ...props
}: IconProps) {
  return <SvgComponent className={className} {...props} />;
}

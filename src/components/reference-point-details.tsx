import type React from "react";

interface ReferencePointDetailsProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ReferencePointDetails({
  as,
  children,
  className,
  ...props
}: ReferencePointDetailsProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

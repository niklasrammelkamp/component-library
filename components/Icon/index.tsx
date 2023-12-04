type Path = {
  path: string;
  viewbox: string;
  fill?: string;
  stroke?: boolean;
  transform?: string;
};

const paths: Record<string, Path> = {
  arrow: {
    path: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z",
    viewbox: "0 0 256 256",
    fill: "none",
  },
};

type IconProps = {
  variant: keyof typeof paths;
  width?: number;
  color?: string;
  className?: string;
};

export default function Icon({
  variant,
  width,
  color = "#FFFFFF",
  className,
}: IconProps) {
  return (
    <svg
      viewBox={paths[variant].viewbox}
      width={width}
      fill={color}
      className={className}
    >
      <title>{variant}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={paths[variant].path}
        fill={paths[variant].stroke ? "none" : color}
        stroke={paths[variant].stroke ? color : undefined}
        transform={paths[variant].transform}
      />
    </svg>
  );
}

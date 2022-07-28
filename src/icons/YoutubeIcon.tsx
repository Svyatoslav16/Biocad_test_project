import { CustomIconProps } from './types';

export const YoutubeIcon: React.FC<CustomIconProps> = ({
  width = '10',
  height = '10',
  color = 'currentColor',
}: CustomIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 10V0L10 5L0 10Z" fill={color} />
    </svg>
  );
};

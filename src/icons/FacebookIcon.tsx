import { CustomIconProps } from './types';

export const FacebookIcon: React.FC<CustomIconProps> = ({
  width = '6',
  height = '12',
  color = 'currentColor',
}: CustomIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.29684 2.324V3.9762H0V5.9965H1.29684V12H3.96084V5.9966H5.7486C5.7486 5.9966 5.916 5.0279 5.99712 3.9687H3.97104V2.5874C3.97104 2.381 4.26144 2.1032 4.5486 2.1032H6V3.70852e-09H4.0266C1.23096 -9.99963e-05 1.29684 2.0222 1.29684 2.324Z"
        fill={color}
      />
    </svg>
  );
};

import { SVGProps } from "react";

export const WaveStart = (props: SVGProps<SVGElement>) => {
  return (
    <svg
      {...props}
      width="26"
      height="40"
      viewBox="0 0 26 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 39C8.66667 33 24.3 17 25.5 1" stroke="#BBBBBB" />
    </svg>
  );
};

export const WaveEnd = (props: SVGProps<SVGElement>) => {
  return (
    <svg
      {...props}
      width="28"
      height="47"
      viewBox="0 0 28 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 47C1.00005 35.2745 3.9545 16.9346 27 1" stroke="#BBBBBB" />
    </svg>
  );
};

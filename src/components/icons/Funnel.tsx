import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFunnel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 32 32" {...props}>
    <path d="M29 11H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1M4 9h24V5H4z" />
    <path d="M25 17H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1M8 15h16v-4H8z" />
    <path d="M22 23H10a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m-11-2h10v-4H11z" />
    <path d="M19 29h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m-5-2h4v-4h-4z" />
  </svg>
);
export default SvgFunnel;

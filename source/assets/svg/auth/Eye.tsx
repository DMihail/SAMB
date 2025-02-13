/** @format */

import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export const Eye = (props: SvgProps) => {
  return (
    <Svg width={22} height={18} viewBox="0 0 22 18" fill="none" {...props}>
      <Path
        d="M1 9s3-7.26 10-7.26S21 9 21 9s-3 7.26-10 7.26S1 9 1 9z"
        stroke="#0DC39C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12.111c1.657 0 3-1.393 3-3.111 0-1.718-1.343-3.111-3-3.111S8 7.282 8 9c0 1.718 1.343 3.111 3 3.111z"
        stroke="#0DC39C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

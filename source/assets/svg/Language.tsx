/** @format */

import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export const Language = (props: SvgProps) => {
  return (
    <Svg width={29} height={28} viewBox="0 0 29 28" fill="none" {...props}>
      <Path
        d="M15 1h-1C6.82 1 1 6.82 1 14s5.82 13 13 13h1c7.18 0 13-5.82 13-13S22.18 1 15 1zM1 11h27M1 17h27"
        stroke="#666"
        strokeWidth={2}
      />
      <Path
        d="M14.5 1l-1.713 2.75A19.766 19.766 0 0014.5 27v0M15.539 1l2.01 3.63a20 20 0 01-1.537 21.743L15.54 27"
        stroke="#666"
        strokeWidth={2}
      />
    </Svg>
  );
};

/** @format */

import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export const LeftArrow = (props: SvgProps) => {
  return (
    <Svg width={15} height={26} viewBox="0 0 15 26" fill="none" {...props}>
      <Path d="M14 25L2 13 14 1" stroke="#222" strokeWidth={2.5} />
    </Svg>
  );
};

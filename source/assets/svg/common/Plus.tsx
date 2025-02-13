/** @format */

import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export const Plus = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0a2 2 0 00-2 2v8H2a2 2 0 100 4h8v8a2 2 0 104 0v-8h8a2 2 0 100-4h-8V2a2 2 0 00-2-2z"
        fill="#fff"
      />
    </Svg>
  );
};

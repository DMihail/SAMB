/** @format */

import * as React from 'react';

import Svg, { Rect, Mask, G, Path, SvgProps } from 'react-native-svg';

export const LanguageRU = (props: SvgProps) => {
  return (
    <Svg width={28} height={20} viewBox="0 0 28 20" fill="none" {...props}>
      <Rect x={0.25} y={0.25} width={27.5} height={19.5} rx={1.75} fill="#fff" stroke="#F5F5F5" strokeWidth={0.5} />
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={28}
        height={20}
      >
        <Rect x={0.25} y={0.25} width={27.5} height={19.5} rx={1.75} fill="#fff" stroke="#fff" strokeWidth={0.5} />
      </Mask>
      <G mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
        <Path d="M0 13.333h28V6.667H0v6.666z" fill="#0C47B7" />
        <Path d="M0 20h28v-6.667H0V20z" fill="#E53B35" />
      </G>
    </Svg>
  );
};

/** @format */

import * as React from 'react';

import Svg, { Rect, Mask, G, Path, SvgProps } from 'react-native-svg';

export const LanguageEN = (props: SvgProps) => {
  return (
    <Svg width={29} height={20} viewBox="0 0 29 20" fill="none" {...props}>
      <Rect x={0.773438} width={28} height={20} rx={2} fill="#fff" />
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={29}
        height={20}
      >
        <Rect x={0.773438} width={28} height={20} rx={2} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#0A17A7" d="M0.773438 0H28.773438V20H0.773438z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-.509-1.916l11.95 8.06v-7.477h6.666v7.476l11.95-8.06 1.49 2.211L22.1 6.667h6.674v6.666H22.1l9.447 6.373-1.49 2.21-11.95-8.06v7.477H11.44v-7.476l-11.949 8.06L-2 19.706l9.447-6.373H.774V6.667h6.673L-2 .294l1.491-2.21z"
          fill="#fff"
        />
        <Path
          d="M19.668 8.332L32.333 0M20.786 13.697L32.14 21.35M9.006 8.31L-2.837.33M10.29 15.605L-2.837 24.31"
          stroke="#DB1F35"
          strokeWidth={0.666667}
          strokeLinecap="round"
        />
        <Path fillRule="evenodd" clipRule="evenodd" d="M.773 12h12v8h4v-8h12V8h-12V0h-4v8h-12v4z" fill="#E6273E" />
      </G>
    </Svg>
  );
};

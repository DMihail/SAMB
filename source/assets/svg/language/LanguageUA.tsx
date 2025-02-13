import * as React from "react"

import Svg, { Rect, Mask, G, Path, SvgProps } from 'react-native-svg';

export const LanguageUA = (props: SvgProps)=> {
  return (
    <Svg
      width={28}
      height={20}
      viewBox="0 0 28 20"
      fill="none"
      {...props}
    >
      <Rect width={28} height={20} rx={2} fill="#fff" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={28}
        height={20}
      >
        <Rect width={28} height={20} rx={2} fill="#fff" />
      </Mask>
      <G mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
        <Path d="M0 10.667h28V0H0v10.667z" fill="#156DD1" />
        <Path d="M0 20h28v-9.333H0V20z" fill="#FFD948" />
      </G>
    </Svg>
  )
}


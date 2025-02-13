/** @format */

import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export const ChooseRadio = (props: SvgProps) => {
  return (
    <Svg width={29} height={29} viewBox="0 0 29 29" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.13 0a14.129 14.129 0 10-.001 28.258 14.129 14.129 0 000-28.258zM2.026 14.13a12.102 12.102 0 1124.204-.001 12.102 12.102 0 01-24.204 0zm12.102 4.266a4.267 4.267 0 100-8.534 4.267 4.267 0 000 8.534z"
        fill="#0DC39C"
      />
    </Svg>
  );
};

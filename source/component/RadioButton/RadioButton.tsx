/** @format */

import React, { FC } from 'react';

import { ChooseRadio, Radio } from '~/assets/svg';
import { PressableImage } from '~/component';

type RadioButtonProps = {
  isSelected: boolean;
  select?: () => void;
  disabled?: boolean;
};

export const RadioButton: FC<RadioButtonProps> = ({ isSelected, select, disabled }) => {
  return <PressableImage image={isSelected ? <ChooseRadio /> : <Radio />} onPress={select} disabled={disabled} />;
};

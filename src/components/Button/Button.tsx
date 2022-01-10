import React from 'react';

import {Title, PrimaryButton, DangerButton, InverseButton} from './styles';

export type ButtonType = 'primary' | 'danger';

interface Props {
  title: string;
  disabled?: boolean;
  inverse?: boolean;
  type?: ButtonType;
  onPress: () => void;
}

const Button = ({
  title,
  onPress,
  disabled = false,
  inverse = false,
  type,
}: Props): JSX.Element => {
  const Label = (
    <Title type={type} inverse={inverse}>
      {title}
    </Title>
  );

  if (inverse) {
    return (
      <InverseButton onPress={onPress} disabled={disabled}>
        {Label}
      </InverseButton>
    );
  }

  if (type === 'danger') {
    return (
      <DangerButton onPress={onPress} disabled={disabled}>
        {Label}
      </DangerButton>
    );
  }

  return (
    <PrimaryButton onPress={onPress} disabled={disabled}>
      {Label}
    </PrimaryButton>
  );
};

export default Button;

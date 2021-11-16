import React from 'react';
import {useTranslation} from 'react-i18next';

import {Container, RemoveIcon, Label} from './styles';

interface Props {
  onPressRemove: () => void;
}

const SwipeRemoveButton = ({onPressRemove}: Props): JSX.Element => {
  const {t} = useTranslation('global');

  return (
    <Container
      testID="remove-item-button"
      onPress={onPressRemove}
      accessible={true}
      accessibilityLabel={t('accessibility-remove-label')}
      accessibilityHint={t('accessibility-remove-hint')}
    >
      <RemoveIcon />
      <Label>{t('remove-label')}</Label>
    </Container>
  );
};

export default SwipeRemoveButton;
